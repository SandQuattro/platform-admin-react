import React from 'react';
import ssoAuth from '../../api/sso-auth'
import './Auth.css'
import GoogleAuth from "./OAuth/GoogleAuth";
import {connect} from 'react-redux'
import {googleSignIn, googleSignOut} from '../../actions/googleAuth/googleAuth'
import {signIn} from "../../actions";
import FacebookAuth from "./OAuth/FacebookAuth";

class Auth extends React.Component {

    state = {
        formClasses: 'ui form',
        login: '',
        password: '',
        errorOrSuccess: '',
        messageHeader: '',
        messageContent: ''
    }

    submitHandler = async event => {

        // убираем стандартное поведение сабмита формы, с рефрешем страницы
        event.preventDefault();

        const {history} = this.props;

        const raw = "{\"username\":\"" + this.state.login + "\",\"password\":\"" + this.state.password + "\"}";

        try {
            const response = await ssoAuth.post('/authorize/user', raw, {
                headers: {'Content-Type': 'application/json'}
            });

            if (response.status === 200) {

                this.setState({
                    errorOrSuccess: 'success',
                    messageHeader: 'Authorization succeeded',
                    messageContent: 'Success!',
                    formClasses: this.state.formClasses + ' success'
                });

                this.props.signIn(response.data);
                localStorage.setItem('token', response.data.token);
                history.push('/users');
            }
        } catch (err) {
            console.error(err.response);

            let msg = '';
            if (typeof err.response === 'undefined') {
                msg = err.toString();
            } else {
                msg = err.response.data.debugMessage;
            }
            this.setState({
                errorOrSuccess: 'error',
                messageHeader: 'ERROR',
                messageContent: msg,
                formClasses: this.state.formClasses + ' error'
            });
        }
    }

    registerHandler = () => {
    }

    render() {

        return (
            <div className='Auth'>
                <form className={this.state.formClasses} onSubmit={this.submitHandler}>
                    <div className="field">
                        <label>Логин</label>
                        <input type="text" name="login" placeholder="test@test.ru" value={this.state.login}
                               onChange={(e) => {
                                   this.setState({login: e.target.value})
                               }}/>
                    </div>
                    <div className="field">
                        <label>Пароль</label>
                        <input type="password" name="password" placeholder="password"
                               value={this.state.password}
                               onChange={(e) => {
                                   this.setState({password: e.target.value})
                               }}/>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" tabIndex="0" className="hidden"/>
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    {this.state.errorOrSuccess === 'error' ? <div className="ui error message">
                            <div className="header">{this.state.messageHeader}</div>
                            <p>{this.state.messageContent}</p>
                        </div> :
                        <div className="ui success message">
                            <div className="header">{this.state.messageHeader}</div>
                            <p>{this.state.messageContent}</p>
                        </div>}

                    <button className="ui button" type="submit" onClick={this.authHandler}>Войти</button>
                    <button className="ui button" type="submit"
                            onClick={this.registerHandler}>Зарегистрироваться
                    </button>
                </form>
                <GoogleAuth/>
                <FacebookAuth/>
            </div>
        );
    }

}

export default connect(null, {signIn: signIn, googleSignIn: googleSignIn, googleSignOut: googleSignOut})(Auth);
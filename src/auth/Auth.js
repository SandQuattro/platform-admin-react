import React from 'react';
import axios from 'axios'
import classes from './Auth.css'

class Auth extends React.Component {

    state = {
        formClasses: 'ui form',
        login: '',
        password: ''
    }

    submitHandler = event => {

        var formdata = new FormData();
        formdata.append("username", this.state.login);
        formdata.append("password", this.state.password);

        axios.post('https://sso-authorization.herokuapp.com/authorize/user', formdata, {
                headers: {'Content-Type': 'multipart/form-data'}
        })
        this.setState({
            formClasses: this.state.formClasses + ' error'
        })
        event.preventDefault();
    }

    authHandler = () => {
    }

    registerHandler = () => {
    }

    render() {

        return (
            <div className={classes.Auth}>
                <div className="ui middle aligned center aligned grid">
                    <form className={this.state.formClasses} onSubmit={this.submitHandler}>
                        <div className="field">
                            <label>Логин</label>
                            <input type="text" name="login" placeholder="test@test.ru" onChange={(e) => {this.setState({login: e.target.value})} }/>
                        </div>
                        <div className="field">
                            <label>Пароль</label>
                            <input type="text" name="password" placeholder="password" onChange={(e) => {this.setState({password: e.target.value})} }/>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabIndex="0" className="hidden"/>
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <div className="ui error message">
                            <div className="header">Action Forbidden</div>
                            <p>You can only sign up for an account once with a given e-mail address.</p>
                        </div>
                        <button className="ui button" type="submit" onClick={this.authHandler}>Войти</button>
                        <button className="ui button" type="submit" onClick={this.registerHandler}>Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Auth;
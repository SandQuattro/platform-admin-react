import React from 'react';
import {connect} from 'react-redux'
import FacebookLogin from 'react-facebook-login';
import {googleSignIn, googleSignOut} from '../../../actions/googleAuth/googleAuth'

class FacebookAuth extends React.Component {

    componentDidMount() {
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    responseFacebook = (response) => {
        console.log(response);
    }

    componentClicked = () => {
        this.checkLoginStatus()
    }

    checkLoginStatus = () => {
        window.FB.getLoginStatus(function (response) {
            console.log(response);
            if (response.authResponse) {
                // logged in and connected user, someone you know
                console.log('you know this user!!');
            } else {
                // no user session available, someone you dont know
                console.log('Howdy Stranger!');
            }
        });
    }

    renderAuthButton() {

        return (
            <div className="ui horizontal divider">
                <FacebookLogin
                    appId="328594744771870"
                    status="true"
                    version="6.0"
                    icon="fa-facebook"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    onClick={this.componentClicked}
                    render={renderProps => (
                        <button className="ui red facebook button" onClick={renderProps.onClick}>
                            <i className="facebook icon"/>This is my custom FB button
                        </button>
                    )}
                />
            </div>);
    }

    render() {
        return (
            <React.Fragment>
                {this.renderAuthButton()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn: googleSignIn, signOut: googleSignOut})(FacebookAuth);
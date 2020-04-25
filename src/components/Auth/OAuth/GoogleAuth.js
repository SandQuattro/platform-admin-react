import React from 'react';
import {connect} from 'react-redux'
import {googleSignIn, googleSignOut} from '../../../actions/googleAuth/googleAuth'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '913732833881-9hhhjf89j4l0csmpre0i0hue1le3vdnq.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getBasicProfile().getImageUrl());
        } else {
            this.props.signOut();
        }
    };

    onGoogleSignIn = () => {
        this.auth.signIn();
    }

    onGoogleSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (!this.props.isSignedIn) {
            return (
                <div className="ui horizontal divider">
                    <button onClick={this.onGoogleSignIn} className="ui red google button">
                        <i className="google icon"/>
                        Login with Google
                    </button>
                </div>);
        } else {
            return (
                <div className="ui horizontal divider">
                    <button onClick={this.onGoogleSignOut} className="ui red google button">
                        <i className="google icon"/>
                        Logout from Google
                    </button>
                </div>
            );
        }
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

export default connect(mapStateToProps, {signIn: googleSignIn, signOut: googleSignOut})(GoogleAuth);
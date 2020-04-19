import React from 'react';
import {connect} from 'react-redux'
import {signIn, signOut} from '../../../actions/googleAuth/googleAuth'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '913732833881-lpr65i9imo66hmplqdk6n5j50rp4qjjv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                console.log(this.auth.isSignedIn)

                this.auth.isSignedIn.listen(this.onAuthChange);
                this.onAuthChange(this.auth.isSignedIn.get())
            });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
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
        console.log('isSignedIn ' + this.props.isSignedIn)
        if (this.auth === null) {
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

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
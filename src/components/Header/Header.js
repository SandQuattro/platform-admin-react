import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import {connect} from "react-redux";

class Header extends React.Component {

    renderLinks() {
        if (localStorage.getItem("token")) {
            return (
                <div>
                    <Link to="/signout">Sign Out</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            );
        }
    }

    render() {

        return (
            <div className="ui raised segment Header">
                <div className="ui left floated header">
                    <Link to="/" className="item">
                        Platform Admin
                    </Link>
                </div>
                <div className="ui right floated header">
                    {this.props.auth.avatar ?
                        <img alt="avatar" className="ui avatar image" src={this.props.auth.avatar}/> : ''}
                    <span>Username</span>
                    {this.renderLinks()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);

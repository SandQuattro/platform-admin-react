import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import {connect} from "react-redux";

const Header = (props) => {
    return (
        <div className="Header">
            <Link to="/" className="item">
                Platform Admin
            </Link>
            <div className="right menu">
                <img alt="avatar" className="ui avatar image" src={props.avatar}/>
                <span>Username</span>
                <Link to="/" className="item">
                    Profile
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        avatar: state.auth.userLogo
    }
}

export default connect(mapStateToProps)(Header);

import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import {connect} from "react-redux";

const Header = (props) => {
    return (
        <div className="ui raised segment Header">
            <div className="ui left floated header">
                <Link to="/" className="item">
                    Platform Admin
                </Link>
            </div>
            <div className="ui right floated header">
                {props.auth.avatar ? <img alt="avatar" className="ui avatar image" src={props.auth.avatar}/> : ''}
                <span>Username</span>
                <Link to="/" className="item">
                    Profile
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);

import React, {Component} from 'react';
import './Drawer.css'
import Dimmer from "../Dimmer/Dimmer";
import {NavLink} from "react-router-dom";

const links = [
    {to: "/users", label: "Пользователи", exact: true},
    {to: "/events", label: "Мероприятия", exact: true}
    ];

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink to={link.to}
                             exact={link.exact}
                             activeClassName={'active'}
                             onClick={this.props.onClose}
                    >{link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = ['Drawer'];

        if (!this.props.isOpen) {
            cls.push('close')
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Dimmer onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )

    }

}

export default Drawer;
// rcc - creates new Component from Template

import React, {Component} from 'react';
import {Container, Navbar} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Container>
                        <Navbar.brand href={"/"}>

                        </Navbar.brand>

                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;
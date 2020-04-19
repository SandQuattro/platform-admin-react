import React from 'react';
import './Layout.css'
import MenuToggle from "../../components/Navigation/Menu/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Menu/Drawer/Drawer";

class Layout extends React.Component {

    state = {
        menu: false
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {

        return (
            <div className={this.state.menu ? 'Layout' : 'Layout moved'}>
                <Drawer isOpen={this.state.menu}
                        onClose={this.menuCloseHandler}/>
                <MenuToggle onToggle={this.toggleMenuHandler} isOpen={this.state.menu}/>
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>
            </div>
        )
    }
}

export default Layout
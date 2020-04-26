import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../actions/auth';

class Signout extends Component {
    componentDidMount() {
        this.props.signout();
    }

    render() {
        this.props.history.push("/auth")
        return (<div/>);
    }
}

const mapsStateToProps = (state) => {
    return {auth: state.auth}
}

export default connect(mapsStateToProps, {signout: signOut})(Signout);

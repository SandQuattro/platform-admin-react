import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../actions/auth';
import history from "../../utils/history";

class Signout extends Component {

    componentDidMount() {
        this.props.signout();
    }

    render() {
        history.push("/signin")
        return (<div/>);
    }
}

const mapsStateToProps = (state) => {
    return {auth: state.auth}
}

export default connect(mapsStateToProps, {signout: signOut})(Signout);

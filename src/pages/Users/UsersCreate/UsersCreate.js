import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createUser} from '../../../actions/users/userActions'
import UserForm from "../UsersForm/UserForm";

class UsersCreate extends Component {

    onSubmit = formValues => {
        this.props.createUser(0, formValues);
    }

    render() {
        return (
            <div className="ui container segment">
                <h3>Create user</h3>
                <UserForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {user: state.users}
}

export default connect(mapStateToProps, {createUser})(UsersCreate);
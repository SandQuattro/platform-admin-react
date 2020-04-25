import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchUser, updateUser} from '../../../actions/users/userActions'
import UserForm from "../UsersForm/UserForm";

class UsersEdit extends Component {

    componentDidMount = () => {
        this.props.fetchUser(this.props.match.params.id);
    }

    onSubmit = formValues => {
        console.log(formValues)
        this.props.updateUser(this.props.match.params.id, formValues);
    }

    render() {
        return (
            <div className="ui container segment">
                <h3>Update user</h3>
                <UserForm initialValues={this.props.user}
                          onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // match.params.id - параметр id из url
    return {user: state.users[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {updateUser, fetchUser})(UsersEdit);
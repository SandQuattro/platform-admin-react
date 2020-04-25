import React from 'react';
import {connect} from 'react-redux'

import {fetchUsers} from "../../actions/users/userActions";
import Header from "../../components/Header/Header";

class UsersList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderList = () => {
        if (this.props.users !== 'undefined') {
            return this.props.users.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.login}</td>
                        <td>{user.firstName}</td>
                        <td className="right aligned">{user.lastName}</td>
                        <td className="center aligned">
                            {user.roles[0].name}
                        </td>
                        <td>
                            {user.roles[0].admin ? <i className="large green checkmark icon"/> : ''}
                        </td>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <Header/>
                    <div className="Users ui container segment">
                        <table className="ui celled structured table">

                            <thead>
                            <tr>
                                <th rowSpan="2">Login</th>
                                <th rowSpan="2">First Name</th>
                                <th rowSpan="2">Last Name</th>
                                <th className="center aligned" colSpan="2">Roles</th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th>isAdmin</th>
                            </tr>
                            </thead>

                            <tbody>
                            {this.renderList()}
                            </tbody>

                        </table>
                    </div>
                </React.Fragment>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {users: Object.values(state.users)}
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);
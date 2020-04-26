import React from 'react';
import {connect} from 'react-redux'

import {fetchUsers} from "../../../actions/users/userActions";
import Header from "../../../components/Header/Header";
import requireAuth from "../../../components/Auth/requireAuth";

class UsersList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderList = () => {
        if (this.props.users !== 'undefined') {
            return this.props.users.map(user => {
                return (
                    <tr key={user.id}>
                        <td rowSpan="1">{user.login}</td>
                        <td rowSpan="1">{user.firstName}</td>
                        <td rowSpan="1" className="right aligned">{user.lastName}</td>
                        <tr>
                            {user.roles.map(role => {
                                return (
                                    <td className="center aligned" key={role.id}>
                                        {role.name}
                                    </td>

                                )
                            })
                            }
                            {user.roles.map(role => {
                                return (
                                    <td className="center aligned" key={role.id}>
                                        {role.admin ? <i className="large green checkmark icon"/> : ''}
                                    </td>
                                )
                            })
                            }
                        </tr>
                        {this.renderButtons(user.id)}
                    </tr>
                )
            })
        }
    }

    renderCreateButton = () => {
        return (
            <>
                <button onClick={() => this.props.history.push("/user/new")}
                        className="ui right floated button primary">Create user
                </button>
                <div className=""/>
            </>
        )
    }

    renderButtons = (userId) => {
        return (
            <>
                <td className="center aligned">
                    <button onClick={() => this.props.history.push(`/user/${userId}`)} className="ui icon button">
                        <i className="large green edit icon"/>
                    </button>
                </td>
                <td className="center aligned">
                    <button className="ui icon button">
                        <i className="large red trash icon"/>
                    </button>
                </td>
            </>
        )
    }

    render() {
        return (
            <div>
                <>
                    <Header/>
                    <div className="ui container segment">
                        {this.renderCreateButton()}
                        <br/>
                        <br/>
                        <table className="ui celled structured table">

                            <thead>
                            <tr>
                                <th rowSpan="2">Login</th>
                                <th rowSpan="2">First Name</th>
                                <th rowSpan="2">Last Name</th>
                                <th className="center aligned" colSpan="2">Roles</th>
                                <th rowSpan="2" className="center aligned">Edit</th>
                                <th rowSpan="2" className="center aligned">Delete</th>
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
                </>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {users: Object.values(state.users)}
}

export default requireAuth(connect(mapStateToProps, {fetchUsers})(UsersList));
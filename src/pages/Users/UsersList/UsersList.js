import React from 'react';
import {connect} from 'react-redux'

import {fetchUsers} from "../../../actions/users/userActions";
import Header from "../../../components/Header/Header";
import history from "../../../utils/history";

class UsersList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderList = () => {
        if (this.props.users !== 'undefined') {
            return (
                <div className="ui grid">
                    {this.props.users.map(user => {
                        return (
                            <React.Fragment key={user.id}>
                                <div className="four wide column">{user.login}</div>
                                <div className="four wide column">{user.firstName}</div>
                                <div className="four wide column">{user.lastName}</div>
                                {
                                    this.renderButtons(user.id)
                                }
                            </React.Fragment>
                        )
                    })}
                </div>
            )
        }
    }

    renderCreateButton = () => {
        return (
            <>
                <button onClick={() => history.push("/user/new")}
                        className="ui right floated button primary">Create user
                </button>
                <div className=""/>
            </>
        )
    }

    renderButtons = (userId) => {
        return (
            <>
                <div className="center aligned">
                    <button onClick={() => history.push(`/user/${userId}`)} className="ui icon button">
                        <i className="large green edit icon"/>
                    </button>
                </div>
                <div className="center aligned">
                    <button className="ui icon button">
                        <i className="large red trash icon"/>
                    </button>
                </div>
            </>
        )
    }

    render() {
        if (!this.props.users) {
            return <div>Loading...</div>;
        }

        return (
            <>
                <Header/>
                <div className="ui container segment">
                    {this.renderCreateButton()}
                    <br/>
                    <br/>
                    {this.renderList()}
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {users: Object.values(state.users), auth: state.auth}
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);
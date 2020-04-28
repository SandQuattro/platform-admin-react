import React from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import Layout from "../../hoc/Layout/Layout";
import UsersList from '../../pages/Users/UsersList/UsersList'
import {EventList} from '../../pages/Events/Events'
import Auth from "../Auth/Auth";
import UsersCreate from "../../pages/Users/UsersCreate/UsersCreate";
import UsersEdit from "../../pages/Users/UsersEdit/UsersEdit";
import UsersDelete from "../../pages/Users/UsersDelete";
import UsersShow from "../../pages/Users/UsersShow";
import SignOut from "../Auth/SignOut";
import history from '../../utils/history'
import ProtectedRoute from "../Auth/ProtectedRoute";

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <Layout>
                    {/* Routing */}
                    <Switch>
                        <Route path="/signin" component={Auth}/>
                        <Route path="/signout" component={SignOut}/>

                        <Route path="/users"
                               component={(props) => <ProtectedRoute component={<UsersList {...props}/>}/>}/>
                        <Route path="/user/new"
                               component={(props) => <ProtectedRoute component={<UsersCreate {...props}/>}/>}/>
                        <Route path="/user/:id"
                               component={(props) => <ProtectedRoute component={<UsersEdit {...props}/>}/>}/>
                        <Route path="/user/delete/:id"
                               component={(props) => <ProtectedRoute component={<UsersDelete {...props}/>}/>}/>
                        <Route path="/user/show/:id"
                               component={(props) => <ProtectedRoute component={<UsersShow {...props}/>}/>}/>
                        <Route path="/events"
                               component={(props) => <ProtectedRoute component={<EventList {...props}/>}/>}/>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

export default App;
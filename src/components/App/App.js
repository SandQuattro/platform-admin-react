import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from "../../hoc/Layout/Layout";
import UsersList from '../../pages/Users/UsersList'
import {EventList} from '../../pages/Events/Events'
import Auth from "../Auth/Auth";
import UsersCreate from "../../pages/Users/UsersCreate/UsersCreate";
import UsersEdit from "../../pages/Users/UsersEdit";
import UsersDelete from "../../pages/Users/UsersDelete";
import UsersShow from "../../pages/Users/UsersShow";

const App = () => (
    <BrowserRouter>
        <Layout>
            {/* Routing */}
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/users" exact component={UsersList}/>
                <Route path="/user/new" component={UsersCreate}/>
                <Route path="/user/:id" component={UsersEdit}/>
                <Route path="/user/delete/:id" component={UsersDelete}/>
                <Route path="/user/show/:id" component={UsersShow}/>
                <Route path="/events" component={EventList}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
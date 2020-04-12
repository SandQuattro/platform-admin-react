import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import Users from './pages/Users'
import Auth from "./auth/Auth";

const App = () => (
    <Layout>
        {/* Routing */}
        <Switch>
            <Route path="/" exact component={Auth}/>
            <Route path="/users" exact component={Users}/>
            <Redirect to="/" />
        </Switch>
    </Layout>
);

export default App;
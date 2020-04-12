import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import Users from './pages/Users'

const App = () => (
    <Layout>
        {/* Routing */}
        <Switch>
            <Route path="/" exact component={Users}/>
            <Route path="/users" exact component={Users}/>
            <Redirect to="/" />
        </Switch>
    </Layout>
);

export default App;
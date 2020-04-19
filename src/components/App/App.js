import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Layout from "../../hoc/Layout/Layout";
import Users from '../../pages/Users'
import {EventList} from '../../pages/Events'
import Auth from "../Auth/Auth";

const App = () => (
        <BrowserRouter>
            <Layout>
                {/* Routing */}
                <Switch>
                    <Route path="/" exact component={Auth}/>
                    <Route path="/users" exact component={Users}/>
                    <Route path="/events" exact component={EventList}/>
                    <Redirect to="/"/>
                </Switch>
            </Layout>
        </BrowserRouter>
);

export default App;
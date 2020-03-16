// rcc - creates new Component from Template

import React from 'react';
import {Admin, Resource, ListGuesser} from 'react-admin';
import Dashboard from './Dashboard';
import authProvider from './Auth/authProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import Header from "./Components/Header";
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (

    <Admin dashboard={Dashboard} authProvider={authProvider}
           dataProvider={simpleRestProvider('https://sso-authorization.herokuapp.com/')}>
        <Resource name="users" list={ListGuesser}/>
        <Resource name="events" list={ListGuesser}/>
    </Admin>
);
export default App;
// rcc - creates new Component from Template

import React from 'react';
import {Admin, ListGuesser, Resource} from 'react-admin';
import authProvider from './Auth/authProvider';
import {UserCreate, UserEdit, UserList} from "./Pages/Users";
import {EventsList} from "./Pages/Events";
import dataProvider from './DataProviders/DataProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" options={{ label: 'Users' }} list={UserList} edit={UserEdit} create={UserCreate}/>
        <Resource name="events" options={{ label: 'Events' }} list={ListGuesser} />
    </Admin>
);

export default App;
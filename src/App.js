// rcc - creates new Component from Template

import React from 'react';
import {Admin, Resource, ListGuesser} from 'react-admin';
import authProvider from './Auth/authProvider';
import dataProvider from './DataProviders/SsoDataProvider';
import {UserList, UserCreate, UserEdit} from "./Pages/User";

const App = () => (

    <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="events" list={ListGuesser} />
        <Resource name="users" list={UserList} show={UserList} create={UserCreate} edit={UserEdit}/>
    </Admin>
);

export default App;
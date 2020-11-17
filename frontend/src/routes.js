import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Announcement from './views/Announcement';
import NewAnnouncement from './views/NewAnnouncement';
import SignUp from './views/SignUp';

import RoutesPrivate from './routesPrivate';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Login} path="/login" />
                <Route component={SignUp} path="/signup" />
                <Route component={Announcement} path="/announcement/:id" />
                <RoutesPrivate component={NewAnnouncement} path="/announcement" />
            </Switch>
        </BrowserRouter>
    );
} 
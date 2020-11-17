import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../views/Home';
import Profile from '../views/Profile';

const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
}
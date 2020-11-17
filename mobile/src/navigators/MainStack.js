import React from 'react';
import {StatusBar} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../views/Preload';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Add from '../views/Add';
import Announcement from '../views/Announcement';
import MainDrawer from '../navigators/MainDrawer';

const Stack = createStackNavigator();

export default () => {
    return (
        <>
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="Announcement" component={Announcement} />
            <Stack.Screen name="MainDrawer" component={MainDrawer} />            
        </Stack.Navigator>
        <StatusBar backgroundColor="#7B1FA2" />
        </>
    );
}
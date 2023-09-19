import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import React from "react";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

const HomeScreen = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Header">
            <Stack.Screen name="Header" component={Header} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default HomeScreen;
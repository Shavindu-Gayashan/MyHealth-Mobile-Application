import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './app/index';
import SignupScreen from './app/signup';
import DashboardScreen from './app/dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="login" component={IndexScreen} options={{ title: 'Home' }} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

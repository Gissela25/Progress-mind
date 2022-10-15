import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Splash from '../screens/SplashScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            headerShown: false,
        }} initialRouteName='Splash'>
                <Stack.Screen name='Splash' component={Splash}/> 
                <Stack.Screen name="Sign In" component={SignInScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
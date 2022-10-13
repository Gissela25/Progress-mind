import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();
export default function Navigation() {
    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false,
        }}>
            {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ title: 'Splash' }} /> */}
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Login' }} />
        </Stack.Navigator>
    );
}
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import MainQuizScreen from '../screens/questionsScreens/MainQuizScreen';
import MathCategoryScreen from '../screens/questionsScreens/MathCategoryScreen';
import PhysicalCategoryScreen from '../screens/questionsScreens/PhysicalCategoryScreen';
import ProgrammingCategoryScreen from '../screens/questionsScreens/ProgrammingCategoryScreen';
import LevelsScreen from '../screens/questionsScreens/LevelsScreen';
import QuestionsScreen from '../screens/questionsScreens/QuestionsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
const Stack = createStackNavigator();
export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName='MainQuiz' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Login' }} />
            {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ title: 'Splash' }} />
            <Stack.Screen name="MainQuiz" component={MainQuizScreen} options={{ title: 'Inicio' }} />
            <Stack.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación' }} />
            <Stack.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática' }} />
            <Stack.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física' }} />
            <Stack.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles' }} />
            <Stack.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz' }} /> */}
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
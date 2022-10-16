import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Splash from '../screens/SplashScreen';
import MainQuizScreen from '../screens/questionsScreens/MainQuizScreen';
import MathCategoryScreen from '../screens/questionsScreens/MathCategoryScreen';
import PhysicalCategoryScreen from '../screens/questionsScreens/PhysicalCategoryScreen';
import LevelsScreen from '../screens/questionsScreens/LevelsScreen';
import QuestionsScreen from '../screens/questionsScreens/QuestionsScreen';
import ProgrammingCategoryScreen from '../screens/questionsScreens/ProgrammingCategoryScreen';

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
                <Stack.Screen name="MainQuizScreen" component={MainQuizScreen} />
                <Stack.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación' }} />
                <Stack.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática' }} />
                <Stack.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física' }} />
                <Stack.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles' }} />
                <Stack.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz' }} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
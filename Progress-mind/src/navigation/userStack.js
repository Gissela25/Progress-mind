import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProgrammingCategoryScreen from '../screens/questionsScreens/ProgrammingCategoryScreen';
import MainQuizScreen from '../screens/questionsScreens/MainQuizScreen';
import SplashScreen from '../screens/SplashScreen';
import MathCategoryScreen from '../screens/questionsScreens/MathCategoryScreen';
import PhysicalCategoryScreen from '../screens/questionsScreens/PhysicalCategoryScreen';
import LevelsScreen from '../screens/questionsScreens/LevelsScreen';
import QuestionsScreen from '../screens/questionsScreens/QuestionsScreen';
const Stack = createStackNavigator();

export default function UserStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
                <Stack.Screen name="MainQuizScreen" component={MainQuizScreen} />
                <Stack.Screen name="Splash" component={SplashScreen} options={{ title: 'Splash' }} />
                <Stack.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación' }} />
                <Stack.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática' }} />
                <Stack.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física' }} />
                <Stack.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles' }} />
                <Stack.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz' }} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
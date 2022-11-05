// import React from 'react';
// import './src/config/firebase';
// import RootNavigation from './src/navigation';

// export default function App() {
//   return <RootNavigation />
// }

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./src/config/config";
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Splash from './src/screens/SplashScreen';
import MainQuizScreen from './src/screens/questionsScreens/MainQuizScreen';
import MathCategoryScreen from './src/screens/questionsScreens/MathCategoryScreen';
import PhysicalCategoryScreen from './src/screens/questionsScreens/PhysicalCategoryScreen';
import LevelsScreen from './src/screens/questionsScreens/LevelsScreen';
import QuestionsScreen from './src/screens/questionsScreens/QuestionsScreen';
import ProgrammingCategoryScreen from './src/screens/questionsScreens/ProgrammingCategoryScreen';
//import QuestionsScreencomy from './src/screens/questionsScreens/QuestionsScreen copy';
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (

      <Stack.Navigator
        screenOptions={{ headerShown: false, }}
        initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ title: 'ForgotPasswordScreen' }} />



        {/* <Stack.Screen name="MainQuizScreen" component={MainQuizScreen} /> */}
      </Stack.Navigator>
    );
  }
  return (
   
      <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
                }} /> */}
                <Stack.Screen name="MainQuizScreen" component={MainQuizScreen} />
                <Stack.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación' }} />
                <Stack.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática' }} />
                <Stack.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física' }} />
                <Stack.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles' }} />
                <Stack.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz' }} />
                {/* <Stack.Screen name="Questionscomy" component={QuestionsScreencomy} options={{ title: 'Quiz' }} /> */}
            </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
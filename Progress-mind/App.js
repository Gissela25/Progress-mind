import { NavigationContainer } from "@react-navigation/native";
import { Button, TouchableOpacity } from 'react-native'
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
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import { COLORS } from './src/styles/constants/Theme';
import { Icon } from 'react-native-elements'
import MenuScreen from "./src/screens/MenuScreen";
import LogIn from "./src/screens/LogIn";
import { useNavigation } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import SignStyles from "./src/styles/SignStyles";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();

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
        <Stack.Screen name="Log In" component={LogIn} />
      </Stack.Navigator>
    );
  }
  return (

    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.green,
        },
        headerTintColor: COLORS.darkblue,
        headerRight: () => (
          <TouchableOpacity style={SignStyles.LogSignOut}>
            <Icon
              name='menu-outline'
              type='ionicon'
              color='#082032'
              onPress={() => navigation.navigate('MenuScreen')}
              onLongPress={() => navigation.navigate('MainQuizScreen')}
            />
          </TouchableOpacity>
        )
      }}>
      {/* <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
                }} /> */}
      <Stack.Screen name="MainQuizScreen" component={MainQuizScreen} options={{ title: '' }} />
      <Stack.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: '' }} />
      <Stack.Screen name="Math" component={MathCategoryScreen} options={{ title: '' }} />
      <Stack.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: '' }} />
      <Stack.Screen name="Levels" component={LevelsScreen} options={{ title: '' }} />
      <Stack.Screen name="Questions" component={QuestionsScreen} options={{ title: '' }} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={{title:''}}/>
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
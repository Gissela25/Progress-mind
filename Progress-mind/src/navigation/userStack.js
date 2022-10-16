// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ProgrammingCategoryScreen from '../screens/questionsScreens/ProgrammingCategoryScreen';
// import MainQuizScreen from '../screens/questionsScreens/MainQuizScreen';
// import SplashScreen from '../screens/SplashScreen';
// import MathCategoryScreen from '../screens/questionsScreens/MathCategoryScreen';
// import PhysicalCategoryScreen from '../screens/questionsScreens/PhysicalCategoryScreen';
// import LevelsScreen from '../screens/questionsScreens/LevelsScreen';
// import QuestionsScreen from '../screens/questionsScreens/QuestionsScreen';
// const Stack = createStackNavigator();

// export default function UserStack() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{
//             headerShown: false,
//         }}>
//                 <Stack.Screen name="MainQuizScreen" component={MainQuizScreen} />
//                 <Stack.Screen name="Splash" component={SplashScreen} options={{ title: 'Splash' }} />
//                 <Stack.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación' }} />
//                 <Stack.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática' }} />
//                 <Stack.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física' }} />
//                 <Stack.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles' }} />
//                 <Stack.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz' }} /> 
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

import * as React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import SignStyles from "../styles/SignStyles";
const auth = getAuth();
import { View, Text, TouchableOpacity } from 'react-native';
import ProgrammingCategoryScreen from '../screens/questionsScreens/ProgrammingCategoryScreen';
import MainQuizScreen from '../screens/questionsScreens/MainQuizScreen';
import SplashScreen from '../screens/SplashScreen';
import MathCategoryScreen from '../screens/questionsScreens/MathCategoryScreen';
import PhysicalCategoryScreen from '../screens/questionsScreens/PhysicalCategoryScreen';
import LevelsScreen from '../screens/questionsScreens/LevelsScreen';
import QuestionsScreen from '../screens/questionsScreens/QuestionsScreen';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { COLORS } from '../styles/constants/Theme';


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
            <TouchableOpacity
                onPress={() => signOut(auth)}
                style={SignStyles.Buttonstyle}
                activeOpacity={0.9}
            >
                <Text style={SignStyles.Textsigninstyle2}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator 
        screenOptions={{  headerStyle:{
            backgroundColor:COLORS.green,},
            headerTintColor:COLORS.darkblue  
        }}
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
           <Drawer.Screen name="MainQuizScreen" component={MainQuizScreen} />
                <Drawer.Screen name="Splash" component={SplashScreen} options={{ title: 'Splash', drawerItemStyle: { height: 0 } }} />
                <Drawer.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación', drawerItemStyle: { height: 0 } }} />
                <Drawer.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática', drawerItemStyle: { height: 0 } }} />
                <Drawer.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física', drawerItemStyle: { height: 0 } }} />
                <Drawer.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles', drawerItemStyle: { height: 0 } }} />
                <Drawer.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz', drawerItemStyle: { height: 0 } }} Screenoptions={{  headerTransparent:true}} /> 
        </Drawer.Navigator>
        
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

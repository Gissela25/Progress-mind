import * as React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import SignStyles from "../styles/SignStyles";
const auth = getAuth();
import { View, Text, Button, TouchableOpacity } from 'react-native';
import ProgrammingCategoryScreen from '../screens/questionsScreens/ProgrammingCategoryScreen';
import MainQuizScreen from '../screens/questionsScreens/MainQuizScreen';
import SplashScreen from '../screens/SplashScreen';
import MathCategoryScreen from '../screens/questionsScreens/MathCategoryScreen';
import PhysicalCategoryScreen from '../screens/questionsScreens/PhysicalCategoryScreen';
import LevelsScreen from '../screens/questionsScreens/LevelsScreen';
import QuestionsScreen from '../screens/questionsScreens/QuestionsScreen';
import { useAuthentication } from '../hook/useAuthentication';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { COLORS } from '../styles/constants/Theme';


function CustomDrawerContent({props,navigation}) {
    const { user } = useAuthentication();
    return (
        <DrawerContentScrollView {...props}>
            <Text style={{
                marginLeft: 20,
                marginTop: 10,
                color: COLORS.green,
                fontWeight: '800',
                fontSize: 15
            }}>{user?.email}</Text>
            <View style={{ marginTop: 20 }}>
                {/* <Button title="Sign Out" color='#C4FF63' onPress={() => signOut(auth)} /> */}
                <TouchableOpacity
                     onPress={() => navigation.navigate('MainQuizScreen')}
                    style={SignStyles.Buttonstyledrawer}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textdrawerstyle}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => signOut(auth)}
                    style={SignStyles.Buttonstyledrawer}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textdrawerstyle}>Cerrar Seión</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.green,
                },
                headerTintColor: COLORS.darkblue,
                drawerStyle: {
                    backgroundColor: COLORS.darkblue,
                    width: 240,
                },
            }}

            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="MainQuizScreen" component={MainQuizScreen} options={{ title: 'Inicio', headerTitleAlign: 'center' }} />
            <Drawer.Screen name="Splash" component={SplashScreen} options={{ title: 'Splash', drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación', headerTitleAlign: 'center', drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática', headerTitleAlign: 'center', drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física', headerTitleAlign: 'center', drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles', headerTitleAlign: 'center', drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz', headerTitleAlign: 'center', drawerItemStyle: { height: 0 } }} Screenoptions={{ headerTransparent: true }} />
        </Drawer.Navigator>

    );
}

export default function UserStack() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import MainQuizScreen from '../screens/questionsScreens/MainQuizScreen';
// import MathCategoryScreen from '../screens/questionsScreens/MathCategoryScreen';
// import PhysicalCategoryScreen from '../screens/questionsScreens/PhysicalCategoryScreen';
// import LevelsScreen from '../screens/questionsScreens/LevelsScreen';
// import QuestionsScreen from '../screens/questionsScreens/QuestionsScreen';
// import ProgrammingCategoryScreen from '../screens/questionsScreens/ProgrammingCategoryScreen';
// import QuestionsScreencomy from '../screens/questionsScreens/QuestionsScreen copy';
// import HomeScreen from '../screens/questionsScreens/MainQuizScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, Text, Button, TouchableOpacity } from 'react-native';
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// export default function UserStack() {
//     return (
//         // <NavigationContainer>
//         //     <Stack.Navigator>
//         //         <Stack.Screen name="Home" component={HomeScreen} options={{
//         //             headerRight: () => (
//         //                 <Button
//         //                     onPress={() => alert('This is a button!')}
//         //                     title="Info"
//         //                     color="#fff"
//         //                 />
//         //             ),
//         //         }} />
//         //         <Stack.Screen name="MainQuizScreen" component={MainQuizScreen} />
//         //         <Stack.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación' }} />
//         //         <Stack.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática' }} />
//         //         <Stack.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física' }} />
//         //         <Stack.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles' }} />
//         //         <Stack.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz' }} />
//         //         <Stack.Screen name="Questionscomy" component={QuestionsScreencomy} options={{ title: 'Quiz' }} />
//         //     </Stack.Navigator>
//         // </NavigationContainer>
//         // <NavigationContainer>
//         //     <Drawer.Navigator>
//         //         <Drawer.Screen name="Home" component={HomeScreen} />
//         //         <Drawer.Screen name="MainQuizScreen" component={MainQuizScreen} />
//         //         <Drawer.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación' }} />
//         //         <Drawer.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática' }} />
//         //         <Drawer.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física' }} />
//         //         <Drawer.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles' }} />
//         //         <Drawer.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz' }} />
//         //         <Drawer.Screen name="Questionscomy" component={QuestionsScreencomy} options={{ title: 'Quiz' }} />
//         //     </Drawer.Navigator>
//         // </NavigationContainer>
//         // <NavigationContainer>
//         //     <Tab.Navigator>
//         //         <Tab.Screen name="Home" component={HomeScreen} />
//         //         <Tab.Screen name="MainQuizScreen" component={MainQuizScreen} />
//         //         <Tab.Screen name="Programming" component={ProgrammingCategoryScreen} options={{ title: 'Programación' }} />
//         //         <Tab.Screen name="Math" component={MathCategoryScreen} options={{ title: 'Matemática' }} />
//         //         <Tab.Screen name="Physical" component={PhysicalCategoryScreen} options={{ title: 'Física' }} />
//         //         <Tab.Screen name="Levels" component={LevelsScreen} options={{ title: 'Niveles' }} />
//         //         <Tab.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Quiz' }} />
//         //         <Tab.Screen name="Questionscomy" component={QuestionsScreencomy} options={{ title: 'Quiz' }} />
//         //     </Tab.Navigator>
//         // </NavigationContainer>
//     );
// }
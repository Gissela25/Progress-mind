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

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

import 'react-native-gesture-handler';
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {createDrawerNavigator} from "@react-navigation/drawer"
import OnBoarding from "../screens/onBoarding";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import SignUp from "../screens/signUp";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import EmergencyService from '../screens/EmergencyService';
import EmergencyCall from '../screens/EmergencyCall';
import Report from '../screens/Report';
import LocationSharing from '../screens/LocationSharing'


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();



// function MyDrawer () {
//     return (
//         <Drawer.Navigator>
//             <Drawer. Screen name="Profile" component={Profile} />
//         </Drawer.Navigator> 
//     )
// }


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="EmergencyService" component={EmergencyService} />
                <Stack.Screen name="EmergencyCall" component={EmergencyCall} />
                <Stack. Screen name="Report" component={Report} />
                <Stack.Screen name="LocationSharing" component={LocationSharing} />
                {/* <Stack.Screen name="Profile" component={MyDrawer} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
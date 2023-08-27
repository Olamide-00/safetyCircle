import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../screens/onBoarding";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import SignUp from "../screens/signUp";




const Stack = createNativeStackNavigator();


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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
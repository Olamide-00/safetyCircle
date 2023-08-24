import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../screens/onBoarding";





const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Data } from "../src/Data";
import ServiceCard from "./ServiceCard";
import * as Animatable from 'react-native-animatable'



export default function Service () {

    const navigation = useNavigation();
    const handlePress = (screenName) => {
        navigation.navigate(screenName)
    } 
    

    const renderItem = (({ item, index, navigation }) => {
        let borederRadius = 0;
        let backgroundColor = ''; 
        if (index === 0) {
            backgroundColor = "#ffd2d2";
            borederRadius = 12;
        } else if (index === 1) {
            backgroundColor = "#b0e0e6";
            borederRadius = 12;
        } else if (index === 2) {
            backgroundColor = "#ffeb99";
            borederRadius = 12;
        } else if (index === 3) {
            backgroundColor = "#bdfcc9"
            borederRadius = 12;
        }

        return (
            <ServiceCard name={item.name} 
                image={item.img} 
                backgroundColor={backgroundColor} 
                borderRadius={borederRadius}
                onPress={() => handlePress(item.screen)} 
            
            />
        )
    })    

    return (
        <Animatable.View animation="slideInUp"> 
            <FlatList
                numColumns={2}
                data={Data}
                renderItem={renderItem}
            />
        </Animatable.View>
    )
}
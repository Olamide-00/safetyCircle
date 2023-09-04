import { StyleSheet, View, Text, FlatList, TouchableOpacity, Linking, Platform } from "react-native";
import { Data, EmergencyNumber } from "../src/Data";
import LagosHelpLineCard from "./LagosHelpLineCard";
import { useNavigation } from "@react-navigation/native";


export default function LagosHelpLine() {
    const navigation = useNavigation();

    const handlePress = (item) => {
        if(Platform.OS === "ios") {
            Linking.openURL(`telprompt:${item.number}`)
        } else {Linking.openURL(`tel:${item.number}`)}
    }
 
    
    function renderItem ({ item }) {
        return (
            <LagosHelpLineCard name={item.  name} image={item.img} onPress={() => handlePress(item)} />
        )
    }

    return (
        <View>
            <FlatList 
            numColumns={2}
                data={EmergencyNumber}
                renderItem={renderItem}
            />
        </View>
    )
}


const styles = StyleSheet.create({
   
})
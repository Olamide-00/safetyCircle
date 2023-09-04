import {View, Text, FlatList, Linking, Platform} from 'react-native'
import { EmergencyNumber } from '../src/Data'
import Card from './Card'



export default function EmergencyServiceCard () {
    
    const handlePress = (item) => {
        if(Platform.OS === "ios") {
            Linking.openURL(`telprompt:${item.number}`)
        } else {Linking.openURL(`tel:${item.number}`)}
    }

     function renderItem ({ item, index }) {
        let borederRadius = 12;
        let backgroundColor = ''; 
        if (index === 0) {
            backgroundColor = "#e0ffff";
            borederRadius = 12;
        } else if (index === 1) {
            backgroundColor = "#ffb6c1";
            borederRadius = 12;
        } else if (index === 2) {
            backgroundColor = "#f0fff0";
            borederRadius = 12;
        } else if (index === 3) {
            backgroundColor = "#bdfcc9"
            borederRadius = 12;
        } else if (index === 4) {
            backgroundColor = "#d8bfd8"
        } else if (index === 5) {
            backgroundColor = "#f5f5dc"
        } else if (index === 6) {
            backgroundColor = "#fffaf0"
        } else if (index === 7) {
            backgroundColor = "#ffafa"
        } else if (index === 8) {
            backgroundColor = "#f5fffa"
        }
        return (
            <Card name={item.name} 
            image={item.img} 
            backgroundColor={backgroundColor} 
            borderRadius={borederRadius}
            onPress={() => handlePress(item)} 
            />
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
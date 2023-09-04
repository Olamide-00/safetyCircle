import { StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
    Image

} from "react-native";




export default function ({ name,image, backgroundColor, borderRadius, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.contentContainer,{backgroundColor, borderRadius}, ]}>
                <Image 
                    source={image}
                    style={styles.img}
                    />
                    <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "50%",
        paddingHorizontal: "2%",
        paddingVertical: "2%",
    },
    img: {
        width: 100,
        height: 100,
    },
    contentContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "800",
        color: "#007bff",
        marginTop: "22%",
        paddingBottom: "5%"
    }
})
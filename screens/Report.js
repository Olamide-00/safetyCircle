import { StyleSheet, View, Text } from "react-native";



export default function Report() {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>
                This feature is coming soon...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        alignItems: "center"
    },
    text: {
        fontSize: 40,
        color: "#fff"
    }
})
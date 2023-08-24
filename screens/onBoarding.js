import { StyleSheet, View, Text, Image } from "react-native";



export default function OnBoarding() {
    return (
        <View style={styles.root}>
            <Image 
                source={require('../assets/welcome2.jpg')} 
                style={styles.img}
            />
            <View style={styles.welcomeMainContainer}>
                <View style={styles.welcomeContainer}> 
                    <Text style={styles.welcome}>Welcome to</Text>
                    <View style={styles.saftyCircle}> 
                        <Text style={styles.saftyCircleText}>SaftyCircle</Text>
                    </View>
                </View>
                <View style={styles.priorityContainer}>
                    <Text  style={styles.safty}>Your safty, <Text style={styles.priority}>Our Priority</Text></Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: 300,
        width: 300,
        marginBottom: "15%",
        borderRadius: 15
    },
    welcome: {
        fontSize: 30,
        fontWeight: "700",
        marginRight: 3
    },
    saftyCircle: {
        backgroundColor: "#ff5710",
        padding: 5,
        borderRadius: 6
    },
    welcomeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    saftyCircleText: {
        fontSize: 30,
        fontWeight: "700",
        color: "#f5f5f5"
    },
    priorityContainer: {
        borderWidth: 1,
        borderColor: "#ff5710",
        padding: 8,
        marginTop: 30,
        borderRadius: 20
    },
    welcomeMainContainer: {
        alignItems: "center"
    },
    safty: {
        fontWeight: "700"
    },
    priority: {
        color: "#007bff",
        fontWeight: "900"
    }
})
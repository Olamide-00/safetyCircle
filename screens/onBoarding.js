import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'


export default function OnBoarding({ navigation }) {
    return (
        <Animatable.View 
        animation="slideInDown"
        style={styles.root}>
            <Animatable.Image 
                animation="slideInDown"
                source={require('../assets/welcome2.jpg')} 
                style={styles.img}
            />
            <View style={styles.welcomeMainContainer}>
                <View style={styles.welcomeContainer}> 
                    <Animatable.Text animation="slideInLeft" delay={200} style={styles.welcome}>Welcome to</Animatable.Text>
                    <Animatable.View animation="slideInRight" delay={200} style={styles.saftyCircle}> 
                        <Text style={styles.saftyCircleText}>SaftyCircle</Text>
                    </Animatable.View>
                </View>
                <Animatable.View animation="lightSpeedIn" style={styles.priorityContainer}>
                    <Text  style={styles.safty}>Your safety, <Text style={styles.priority}>Our Priority</Text></Text>
                </Animatable.View>
            </View>
            <TouchableOpacity style={styles.nextContainer} onPress={() => navigation.navigate("GetStarted")}>
                <Animatable.Text animation="slideInLeft" style={styles.nextText}>
                    Next
                </Animatable.Text>
            </TouchableOpacity>
        </Animatable.View>
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
    },
    nextContainer: {
        backgroundColor: "#007bff",
        paddingHorizontal: "5%",
        paddingVertical: "3%",
        borderRadius: 8,
        position: "absolute",
        bottom: 10,
        right: 15 ,
        alignItems: "center",
        justifyContent: "center"
    },
    nextText: {
        color: "#fff",
        fontWeight: "700"
    }
})
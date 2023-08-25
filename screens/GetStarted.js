import { StyleSheet, View, Text, Image,  TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'




export default function GetStarted({ navigation }) {
    return (
        <View style={styles.root}>
            <Animatable.View animation="slideInDown" styles={styles.imgContainer}>
                <Image 
                    source={require('../assets/force.jpg')}
                    style={styles.img}
                />
            </Animatable.View>
            <View style={styles.titleContainer}>
                <Animatable.Text animation="slideInLeft" delay={300} style={styles.titleText}>Join us in creating a safer world</Animatable.Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
                    <Animatable.Text animation="slideInUp" style={styles.btnText}>Get Started</Animatable.Text>
                </TouchableOpacity>
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
    imgContainer: {
        width: "100%"
    },
    img: {
        width: 300,
        height: 350,
        resizeMode: "cover",
        borderRadius: 20
    },
    titleContainer: {
        marginVertical: "10%",
        alignItems: "center"
    },
    titleText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#007bff"
    },
    btn: {
        marginTop: "10%",
        backgroundColor: "#ff5710",
        paddingHorizontal: "7%",
        paddingVertical: "5%",
        borderRadius: 8
    },
    btnText: {
        fontSize: 18,
        fontWeight: "800",
        color: "#f5f5f5"
    }
    
})
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import {Zocial, Entypo} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.root}>
            <View>
                <View style={styles.textContainer}>
                    <View style={styles.saftyCircleContainer}>
                        <Animatable.Text animation="slideInLeft" style={styles.text1}>Welcome back to </Animatable.Text>
                        <View style={styles.safty}>
                            <Animatable.Text animation="slideInRight" style={styles.saftyCircle}>SaftyCircle</Animatable.Text>
                        </View>
                    </View>
                    <Animatable.Text animation="zoomIn" delay={700} style={styles.text2}>Your're never alone in an emergency</Animatable.Text>
                </View>
                <View>
                    <Animatable.View animation="slideInLeft" style={styles.inputContainer}>
                        <Zocial name="email" size={25} color= "#007bff"  style={styles.icon}/>
                        <TextInput
                            placeholder="Enter your email"
                            onChangeText={() => setEmail}
                            placeholderTextColor="#007bff"
                            style={styles.input}   
                            maxLength={30}              
                        />
                    </Animatable.View>
                    <Animatable.View animation="slideInRight" style={styles.inputContainer}>
                        <Entypo name="lock" size={25} color= "#007bff" style={styles.icon}/>
                        <TextInput
                            placeholder="Enter your password"
                            onChangeText={() => setEmail}
                            placeholderTextColor="#007bff"
                            style={styles.input}
                            maxLength={15}
                            secureTextEntry
                        />
                    </Animatable.View>
                    <View style={styles.loginMainContainer}>
                        <TouchableOpacity  style={styles.loginContainer}>
                            <Text style={styles.loginText}>Login In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.signUpContainer}>
                <Animatable.Text animation="slideInRight" style={styles.signUpText}>
                    Sign up
                </Animatable.Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        marginVertical: "10%",
        alignItems: "center"
    },
    text1: {
        fontSize: 26,
        fontWeight: "800"
    },
    saftyCircleContainer: {
        flexDirection: "row",
        padding: 5,
        alignItems: "center"
    },
    safty: {
        borderRadius: 8,
        backgroundColor: "#ff5710",
        padding: 12
    },
    saftyCircle: {
        fontSize: 20,
        fontWeight: "800",
        color: "#f5f5f5"
    },
    text2: {
        fontWeight: "800",
        color: "#007bff",
        fontSize: 16,
        marginTop: "3%"
    },
    inputContainer: {
        flexDirection: "row",
        marginVertical: "4%",
        paddingVertical: "5%",
        borderWidth: 1,
        borderColor: "#ff5710",
        borderRadius: 10,
    },
    icon: {
        marginLeft: "5%",
        marginRight: "10%"
    },
    input: {
        fontSize: 18
    },
    loginMainContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    loginContainer: {
        backgroundColor: "#ff5710",
        paddingHorizontal: "13%",
        paddingVertical: "6%",
        borderRadius: 10,
        marginTop: "12%"
    },
    loginText: {
        fontSize: 18,
        fontWeight: "900",
        color: "#f5f5f5",
    },
    signUpContainer: {
        position: "absolute",
        bottom: "1%",
        right: "2%",
        backgroundColor: "#007bff",
        paddingHorizontal: "4%",
        paddingVertical: "4%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    signUpText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#f5f5f5"
    }
})
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import {Entypo, MaterialIcons,FontAwesome} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'



export default function SignUp () {
    return(
        <View animation="zoomIn" style={styles.root}>
            <View style={styles.textContainer}>
                <Animatable.Text animation="slideInLeft" delay={300} style={styles.text1}>Don't have an account?</Animatable.Text>
                <Animatable.Text animation="zoomIn" delay={800} style={styles.text2}>Sign up below</Animatable.Text>
            </View>
            <View style={styles.textInputMainContainer}>
                <Animatable.View animation="slideInLeft" delay={400} style={styles.inputContainer}>
                    <Entypo name="user" size={25} color="#007bff"  style={styles.icon}/>
                    <TextInput
                        placeholder="Enter your name"
                        placeholderTextColor="#007bff"
                        style={styles.input}
                    />
                </Animatable.View>
                <Animatable.View animation="slideInRight" delay={500} style={styles.inputContainer}>
                    <MaterialIcons name="email" size={25} color= "#007bff" style={styles.icon}/>
                    <TextInput
                        placeholder="Enter your email"
                        placeholderTextColor="#007bff"
                        style={styles.input}
                        maxLength={30}
                    />
                </Animatable.View>
                <Animatable.View animation="slideInLeft" delay={600} style={styles.inputContainer}>
                    <FontAwesome name="phone" size={25} color="#007bff" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your number"
                        placeholderTextColor="#007bff"
                        style={styles.input}
                        maxLength={12}
                    />
                </Animatable.View>
                <Animatable.View animation="slideInRight" delay={700} style={styles.inputContainer}>
                    <Entypo name="lock" size={25} color="#007bff" style={styles.icon}/>
                    <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor="#007bff"
                        style={styles.input}
                        maxLength={15}
                        secureTextEntry
                    />
                </Animatable.View>
            </View>
            <TouchableOpacity style={styles.signUpContainer}>
                <Animatable.Text animation="slideInLeft" style={styles.signUpText}>Sign Up</Animatable.Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        marginVertical: "10%",
        alignItems: "center"
    },
    text1: {
        fontSize: 24,
        fontWeight: "800",
        color: "#ff5710",
        marginBottom: "3%"
    },
    text2: {
        fontSize: 20,
        fontWeight: "700",
        color: "#007bff"
    },
    inputContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ff5710",
        borderRadius: 10,
        paddingHorizontal: "10%",
        paddingVertical: "2%",
        marginVertical: "3%"
        
    },
    icon: {
        marginRight: "12%"
    },
    input: {
        fontSize: 18
    },
    signUpContainer: {
        marginVertical: "7%",
        backgroundColor: "#ff5710",
        paddingHorizontal: "8%",
        paddingVertical: "5%",
        borderRadius: 12
    },
    signUpText: {
        fontSize: 18,
        fontWeight:   "800",
        color: "#fff"
    }
})
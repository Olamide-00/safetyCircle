import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions} from "react-native";
import {Entypo} from '@expo/vector-icons'
import Service from "../components/Service";
import * as Animatable from 'react-native-animatable'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default function Home ({ navigation }) {

    return (
        <SafeAreaView style={styles.root}>
           <View style={styles.headerMainContainer}>
                <TouchableOpacity style={styles.iconContainer }>
                    <Entypo name="menu" size={40} color= "#007bff"/>
                </TouchableOpacity>
                <View style={styles.imgContainer}>
                    <Image 
                        source={require('../assets/Welcome.png')}
                        style={styles.img}
                    />
                </View>
           </View>
           <Animatable.View animation="bounceIn"  style={styles.heroContainer}>
                <View>
                    <Image 
                        source={require('../assets/danger.png')}
                        style={styles.heroImage}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        Your Safety,<Text style={styles.priority}>Our Priority.</Text> 
                    </Text>
                    <Animatable.View animation="slideInRight" style={styles.saftyCircle}>
                        <Text style={styles.text2}>SaftyCircle</Text>
                    </Animatable.View>
                    <View style={styles.motto}>
                        <Text style={styles.text3}>Emergency Asistance at your Fingertips</Text>
                    </View>
                </View>
           </Animatable.View>
           <View>
            <Service />
           </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: hp(5)
    },
    headerMainContainer: {
        // marginTop: "2%",
        marginBottom: "6%",
        marginHorizontal: "2%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imgContainer: {
         backgroundColor: "#007bff",
         padding: "0.5%",
         borderRadius: 10
    },
    img: {
        width: 40,
        height: 40
    },
    iconContainer: {
        backgroundColor: "#ff5710",
        padding: "0.5%",
        borderRadius: 10
    },
    heroContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ff5710",
        marginHorizontal: "2%",
        borderRadius: 10,
        marginVertical: "5%"
    },
    heroImage: {
        width: 150,
        height: 180,
        borderRadius: 9
    }, 
    textContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    text1 : {
        fontSize: 18,
        fontWeight: "700"
    },
    text2 : {
        fontSize: 19,
        fontWeight: "800",
        color: "#fff"
    },
    text3 : {
        fontSize: 10,
        fontWeight: "700"
    },
    saftyCircle: {
        backgroundColor: "#ff5710",
        marginVertical: "8%",
        paddingHorizontal: "4%",
        paddingVertical: "4%",
        borderRadius: 8
    },
    motto: {
        borderWidth: 1,
        borderColor: "#007bff",
        padding: "2%",
        borderRadius: 10
    },
    priority: {
        color: "#007bff",
        fontWeight: "900"
    }
})

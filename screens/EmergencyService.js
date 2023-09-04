import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import EmergencyServiceCard from "../components/EmergencyServiceCard";
import * as Animatable from 'react-native-animatable'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function EmergencyService () {
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <View>
                    <View>
                        <Animatable.View animation="zoomIn" style={styles.headerContainer}>
                            <Image 
                                source={require('../assets/force.jpg')}
                                style={styles.img}
                            />
                            <Animatable.View animation="slideInRight" delay={400} style={styles.textContainer}>
                                <Text style={styles.text1}>Safety at The Speed of Need</Text>
                                <View style={styles.text2Container}>
                                    <Text style={styles.text2}>Trust in our Emergency Service Lead</Text>
                                </View>
                            </Animatable.View>
                        </Animatable.View>
                        <Animatable.View animation="slideInRight" style={styles.punchLineContainer}>
                            <Text style={styles.punchLine}>
                                Get <Text style={styles.emergency}> Emergency</Text> Service!
                            </Text>
                        </Animatable.View>
                        <View>
                            {/* emergency service card */} 
                            <EmergencyServiceCard />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    },
    headerContainer: {
        marginHorizontal: "2%",
        marginVertical: hp(5),
        borderWidth: 1,
        borderColor: "#007bff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30
     },
    img: {
        width: 150,
        height: 150,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    text1: {
        fontSize: 14,
        fontWeight: "900",
        color: "#007bff"
    },
    text2: {
        fontSize:  10,
        fontWeight: "800",
        color: "#ff5710",
        paddingLeft: "2%"
    },
    textContainer: {
        marginLeft: "1.5%"
    },
    text2Container: {
        borderWidth: 1,
        borderColor: "#007bff",
        marginTop: "10%",
        paddingVertical: "3%",
        borderRadius: 12
    },
    punchLine: {
        fontSize: 22,
        fontWeight: "800",
        color: "#007bff"
    },
    emergency: {
        color: "#ff5710",
        fontWeight: "900"
    },
    punchLineContainer: {
        marginLeft: "5%"
    }
})
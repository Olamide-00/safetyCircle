import { StyleSheet, View, Text,SafeAreaView,Image, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable'
import LagosHelpLine from '../components/LagosHelpLine'
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function EmergencyCall () {
  return (
    <ScrollView>
        <SafeAreaView  style={styles.root}>
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
            <View style={styles.content}>
                <LagosHelpLine />
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: heightPercentageToDP(5)
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
},
content: {
  
}
})
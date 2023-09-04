import { StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import LagosHelpLine from "./LagosHelpLine";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'




export default function LagosHelpLineCard ({ name, image, onPress }) {
    return (
        <TouchableOpacity style={styles.root} onPress={onPress}>
            <View style={styles.container}>
                <Image 
                    source={image}
                    style={styles.img}
                    />
            </View>
            <View>
                 <Text style={styles.text}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    root: { 
       width: wp(46),
       marginHorizontal: wp(2),
       marginVertical: hp(2),
       borderRadius: 12,
       borderWidth: 1,
       height: hp(20),
       alignItems: "center",
       justifyContent: "space-between",
       borderColor: "#ff5710",
    },
  img: {
    width: 80,
    height: 80,
    marginTop: hp(2),
    borderRadius: 50
  }, 
  text: {
    fontSize: hp(2),
    padding: wp(1),
    fontWeight: "700",
    color: "#007bff",
  }
})
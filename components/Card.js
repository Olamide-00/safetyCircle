import { StyleSheet, View, Text, TouchableOpacity, Image
} from "react-native";
import * as Animatable from 'react-native-animatable'



export default function ({ name,image, backgroundColor, borderRadius, onPress}) {
   return (
       <TouchableOpacity style={styles.container} onPress={onPress}>
           <Animatable.View animation="slideInUp" style={[styles.contentContainer,{backgroundColor, borderRadius}, ]}>
                <View style={styles.imgContainer} >
                <Image 
                    source={image}
                    style={styles.img}
                    />
                </View>
                   <Text style={styles.text}>{name}</Text>
           </Animatable.View>
       </TouchableOpacity>
   )
}


const styles = StyleSheet.create({
   container: {
       width: "50%",
       paddingHorizontal: "2%",
       paddingVertical: "2%",
       marginTop: "5%"
   },
   img: {
       width: 80,
       height: 80,
       borderRadius: 30,
       marginTop: "2%"
   },
   imgContainer: { 
    backgroundColor: "black",
    padding: "3%",
    borderRadius: 50
   },
   contentContainer: {
       justifyContent: "center",
       alignItems: "center"
   },
   text: {
       fontSize: 17,
       fontWeight: "800",
       color: "#007bff",
       marginTop: "30%",
       paddingBottom: "8%"
   }
})
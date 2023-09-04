import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';




const MapScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 9.081999, 
          longitude: 8.6752000000051, 
          latitudeDelta: 5.532462,
          longitudeDelta: 5.898714,
        }}
      >
        {/* Marker for the user's current location */}
        <Marker
          coordinate={{
            latitude: 6.4541, 
            longitude: 3.3947,
          }}
          title="You are here"
          description="This is your current location"
        />
      </MapView>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()} >
        <Ionicons name="arrow-back-circle" size={40} color="white"  style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 30,
    marginLeft: 20,
    backgroundColor: "#ff5710",
    paddingHorizontal: 15,
    borderRadius: 12
  }
});

export default MapScreen;

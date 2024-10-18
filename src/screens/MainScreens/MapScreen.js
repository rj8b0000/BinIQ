import React, { useState } from 'react';
import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import MapFilterIcon from '../../../assets/MapFilterIcon.svg';
import SearchIcon from '../../../assets/SearchIcon.svg';
import CameraIcon from '../../../assets/CameraIcon.svg';

const MapScreen = () => {
  const navigation = useNavigation();

  // Dummy location data
  const [markers, setMarkers] = useState([
    { id: 1, title: "Location 1", coordinate: { latitude: 37.78825, longitude: -122.4324 } },
    { id: 2, title: "Location 2", coordinate: { latitude: 37.78925, longitude: -122.4354 } },
    { id: 3, title: "Location 3", coordinate: { latitude: 37.79025, longitude: -122.4364 } },
    { id: 4, title: "Location 4", coordinate: { latitude: 37.79125, longitude: -122.4374 } },
    { id: 5, title: "Location 5", coordinate: { latitude: 37.79225, longitude: -122.4384 } },
    { id: 6, title: "Location 6", coordinate: { latitude: 37.79325, longitude: -122.4394 } },
    { id: 7, title: "Location 7", coordinate: { latitude: 37.79425, longitude: -122.4404 } },
    { id: 8, title: "Location 8", coordinate: { latitude: 37.79525, longitude: -122.4414 } },
    { id: 9, title: "Location 9", coordinate: { latitude: 37.79625, longitude: -122.4424 } },
    { id: 10, title: "Location 10", coordinate: { latitude: 37.79725, longitude: -122.4434 } },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View
      >
        <View style={styles.header}>
          <View style={styles.headerChild}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
            </Pressable>
            <Text style={styles.headerText}>Map</Text>
          </View>
        </View>
        <View style={styles.searchParent}>
          <Pressable style={styles.searchContainer} onPress={() => navigation.navigate('SearchScreen')}>
            <View style={styles.cameraButton}>
              <SearchIcon />
            </View>
            <Text style={styles.input}>search for anything</Text>
            <View style={styles.searchButton}>
              <CameraIcon />
            </View>
          </Pressable>
          <TouchableOpacity style={styles.menuButton}>
            <MapFilterIcon />
          </TouchableOpacity>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              pinColor={'red'} // Custom pin color
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F3F5',
  },
  header: {
    width: wp(100),
    height: hp(7),
    marginTop: '10%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp(3),
    textAlign: 'left',
    color: '#0D0140'
  },
  searchParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '3%',
    marginTop: '3%',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 10,
    borderColor: '#99ABC678',
    height: hp(6),
    backgroundColor: '#F2F2F2'
  },
  cameraButton: {
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: hp(2.2),
    fontFamily: 'Nunito-Regular',
    paddingVertical: 8,
    color: '#999'
  },
  searchButton: {
    padding: 10,
  },
  menuButton: {
    backgroundColor: '#130160',
    padding: 10,
    borderRadius: 12,
    height: hp(6),
    width: wp(14),
    justifyContent: 'center',
    alignItems: 'center'
  },
  vector: {
    flex: 1,
  },
  map: {
    position: 'absolute',
    width: wp(100),
    height: hp(100),
    zIndex: -1
  },
});

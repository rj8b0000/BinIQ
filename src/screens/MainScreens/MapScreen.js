import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground
        source={require('../../../assets/vector_1.png')}
        style={styles.vector}
        resizeMode="stretch"
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
            <View style={styles.cameraButton}  onPress={() => navigation.navigate('SearchScreen')}>
              <Image source={require('../../../assets/camera.png')} style={{ width: wp(7) }}/>
            </View>
            <Text style={styles.input}>search for anything</Text>
            <View style={styles.searchButton}>
              <Image source={require('../../../assets/search.png')} style={{ width: wp(6) }} />
            </View>
          </Pressable>
          <TouchableOpacity style={styles.menuButton}>
            <FontAwesome6 name='bars-staggered' size={18} color={'#fff'} />
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
  )
}

export default MapScreen

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
  marginVertical: '3%',
},
searchContainer: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  // backgroundColor: 'trasparent',
  borderWidth: 1,
  borderRadius: 12,
  marginRight: 10,
  borderColor: '#99ABC678',
  height: hp(6),
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
})
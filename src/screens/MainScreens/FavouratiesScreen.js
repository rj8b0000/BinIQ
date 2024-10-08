import { Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window')
const FavouratiesScreen = () => {
  const navigation = useNavigation();
  const [favouritePress, setFavouritePressed] = useState(false)
  const [activeSlide, setActiveSlide] = useState(1);
  const topBins = [
    {
      id: 1,
      image: require('../../../assets/flip_find.png'),
      title: 'FLIP $ FIND',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 2,
      image: require('../../../assets/hidden_finds.png'),
      title: 'HIDDED FINDS',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
  ]
  const myFavourites = [{
    id: 1,
    image: require('../../../assets/gray_img.png'),
    description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
    discountPrice: '$65',
    originalPrice: '$151',
    totalDiscount: '60% off'
  },
  ]
  const renderMyFavourites = ({ item }) => (
    <View style={{ width: wp(47), height: hp(26) }}>
      <View style={{ width: wp(45), height: hp(26), borderRadius: 5, borderWidth: 0.5, borderColor: '#e6e6e6' }}>
        <Image source={item.image} style={{ width: wp(45), height: hp(13), borderRadius: 5 }} />
        <Ionicons name='heart' size={hp(3.5)} color={'#EE2525'} style={{ position: 'absolute', right: '2%', top: '2%' }} />
        <View style={{ paddingHorizontal: '1%' }}>
          <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.7), margin: '0.5%' }}>{item.description}</Text>
        </View>
        <View style={{ position: 'absolute', bottom: '2%', paddingHorizontal: '3%' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(1.8) }}>{item.discountPrice}</Text>
            <Text style={{ color: 'red' }}><Text style={{ fontFamily: 'Nunito-Bold', color: '#808488', fontSize: hp(1.8), textDecorationLine: 'line-through' }}>{item.originalPrice}</Text>{'  '}{item.totalDiscount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    // <View style={{paddingHorizontal: '0.1%'}}>
    <Pressable style={{ width: wp(58), height: hp(25), marginVertical: '7%' }} onPress={() => navigation.navigate('BinStore')}>
      <View style={{ width: wp(55), height: hp(25), borderRadius: 10, borderWidth: 0.5, borderColor: '#e6e6e6' }}>
        <Image source={item.image} style={{ width: wp(55), height: hp(15), borderRadius: 10 }} />
        <View style={{ margin: '6%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#0049AF', fontSize: hp(2.1) }}>{item.title}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.7) }}>{item.location}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.5) }}>{item.distance}</Text>
          </View>
          <View style={{ backgroundColor: '#FFBB36', height: hp(3), width: wp(12), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '1.5%', borderRadius: 4 }}>
            <FontAwesome name='star' size={13} color={'#fff'} />
            <Text style={{ color: '#fff', fontFamily: 'Nunito-Regular' }}>{item.review}</Text>
          </View>
        </View>
      </View>
    </Pressable>

  );

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
        <View style={styles.header}>
          <View style={styles.headerChild}>
            <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
            </Pressable>
            <Text style={styles.headerText}>My Favourites</Text>
          </View>
        </View>
        <View style={{ flex: 1, width: '100%', height: hp(35) }}>
          <View style={{ marginVertical: '4%', paddingHorizontal: '5%' }}>
            <View style={{ marginVertical: '3%' }}>
              <FlatList
                data={myFavourites}
                renderItem={renderMyFavourites}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flex: 1, width: '100%', height: hp(35) }}>
        <View style={{ paddingHorizontal: '5%' }}>
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.3), color: '#000000' }}>FAV. BINS</Text>
          <FlatList
            data={topBins}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default FavouratiesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(45),
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
    width: wp(52),
    justifyContent: 'space-between'
  },
  headerText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp(3.2),
    textAlign: 'left',
    color: '#0D0140'
  },
  slider: {
    width: '90%',
    borderColor: '#000',
    marginHorizontal: '5%',
    height: height * 0.25,
    marginTop: '5%',
  },
  slide: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.25
  },
  paginationContainer: {
    position: 'absolute',
    left: '43%',
    bottom: '-25%',
    width: wp(10),
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#130160'
  },
  paginationInactiveDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  contentHeader: {
    width: '90%',
    height: hp(10),
    marginTop: '6%',
    marginHorizontal: '5%',
    flexDirection: 'row'
  },
  content: {
    width: '50%',
    height: hp(10),
  },
  review: {
    width: '50%',
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  contentDetails: {
    width: '90%',
    marginHorizontal: '5%',
    height: hp(19)
  },
  storeButtonsContainer: {
    width: '80%',
    height: hp(4),
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nearestStore: {
    width: '48%',
    borderWidth: 0.6,
    borderColor: '#828282',
    height: hp(4),
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomButtons: {
    width: '90%',
    height: hp(7.5),
    justifyContent: 'center',
    alignSelf: 'center',
    // marginVertical: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewSimilar: {
    width: '48%',
    borderWidth: 0.4,
    borderColor: '#828282',
    height: hp(7),
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: '3%'
  }

})
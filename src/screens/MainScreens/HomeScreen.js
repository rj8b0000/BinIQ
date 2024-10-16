import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Camera, Search, Menu } from 'lucide-react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');
const HomeScreen = ({ openDrawer }) => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);
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
  const products = [
    {
      id: 1,
      image: require('../../../assets/colgate.png'),
      title: 'COLGATE',
      description: 'Advance whitening toothpaste 160g',
      price: '$7 - 27'
    },
    {
      id: 2,
      image: require('../../../assets/darlie.png'),
      title: 'DARLIE',
      description: 'All shiny white toothpaste 140g',
      price: '$24.3 - 35.8'
    },
    {
      id: 3,
      image: require('../../../assets/colgate.png'),
      title: 'COLGATE',
      description: 'Advance whitening toothpaste 160g',
      price: '$7 - 27'
    },
    {
      id: 4,
      image: require('../../../assets/darlie.png'),
      title: 'DARLIE',
      description: 'All shiny white toothpaste 140g',
      price: '$24.3 - 35.8'
    }

  ]
  const carouselImages = [
    {
      id: 1,
      image: require('../../../assets/slider_1.png'),
      styles: {width: wp(85), height: hp(41.5)}
    },
    {
      id: 2,
      image: require('../../../assets/globe_map.png'),
      styles: {width: wp(80), height: hp(40)}
    },
  ]
  const myFavourites = [{
    id: 1,
    image: require('../../../assets/gray_img.png'),
    title: 'COLGATE',
    description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
    discountPrice: '$65',
    originalPrice: '$151',
    totalDiscount: '60% off'
  },
  {
    id: 2,
    image: require('../../../assets/gray_img.png'),
    title: 'COLGATE',
    description: `Labbin White Sneakers For Men and Female`,
    discountPrice: '$650',
    originalPrice: '$125',
    totalDiscount: '70% off'
  },
  {
    id: 3,
    image: require('../../../assets/gray_img.png'),
    title: 'COLGATE',
    description: `Mammon Women's Handbag (Set of 3, Beige)`,
    discountPrice: '$75',
    originalPrice: '$199',
    totalDiscount: '60% off'
  }
  ]
  const renderCarouselItem = ({ item, index }) => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '9%',width: wp(100), height: hp(40)}}>
        <Image source={item.image} style={item.styles} />
      </View>
      //   <View style={{ justifyContent: 'center', alignItems: 'center', marginTop : '9%'}}>
      //   <Image source={require('../../../assets/globe_map.png')} style={{ width: wp(85), height: hp(45)}} />
      // </View>
    )
  };
  const renderItem = ({ item }) => (
    // <View style={{paddingHorizontal: '0.1%'}}>
    <Pressable style={{ width: wp(52), height: hp(25), marginVertical: '7%'}} onPress={() => navigation.navigate('TopBinsNearMe')}>
      <View style={{ width: wp(49), height: hp(23.5), borderRadius: 10, borderWidth: 0.4, borderColor: '#999' }}>
        <Image source={item.image} style={{ width: wp(49), height: hp(14), borderRadius: 10 }} />
        <View style={{ margin: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#0049AF', fontSize: hp(2) }}>{item.title}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.6) }}>{item.location}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.4) }}>{item.distance}</Text>
          </View>
          <View style={{ backgroundColor: '#FFBB36', height: hp(2.3), width: wp(11), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '1.4%', borderRadius: 4 }}>
            <FontAwesome name='star' size={12} color={'#fff'} />
            <Text style={{ color: '#fff', fontFamily: 'Nunito-Regular', fontSize: hp(1.6) }}>{item.review}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const renderProductsItem = ({ item }) => (
    <TouchableOpacity style={{ width: wp(52), height: hp(23),  marginVertical: '5%'}} onPress={() => navigation.navigate('TopBinItems')}>

      <View style={{ width: wp(48), height: hp(22), borderRadius: 10, borderWidth: 0.5, borderColor: '#999' }}>
        <Image source={item.image} style={{ width: wp(47), height: hp(13) }} />
        <View style={{ margin: '3%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#0049AF', fontSize: hp(1.6) }}>{item.title}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.3) }}>{item.description}</Text>
            <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(1.5) }}>{item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderMyFavourites = ({ item }) => (
    <TouchableOpacity style={{ width: wp(47), height: hp(26) }} onPress={() => navigation.navigate('FavouritesScreen')}>
      <View style={{ width: wp(45), height: hp(26), borderRadius: 5, borderWidth: 0.5, borderColor: '#e6e6e6' }}>
        <Image source={item.image} style={{ width: wp(45), height: hp(13), borderRadius: 5 }} />
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
    </TouchableOpacity>
  );
  const pagination = () => {
    return (
        <Pagination
            dotsLength={carouselImages.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
            inactiveDotOpacity={0.3}
            inactiveDotScale={0.7}
        />
    );
};
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground source={require('../../../assets/home_bg.jpg')} style={styles.vector}>
        <View style={styles.container}>
          <Pressable style={styles.searchContainer} onPress={() => navigation.navigate('SearchScreen')}>
            <View style={styles.cameraButton} onPress={() => navigation.navigate('SearchScreen')}>
              <Image source={require('../../../assets/camera.png')} style={{ width: wp(7) }} />
            </View>
            <Text style={styles.input}>search for anything</Text>
            <View style={styles.searchButton}>
              <Image source={require('../../../assets/search.png')} style={{ width: wp(6) }} />
            </View>
          </Pressable>
          <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
            <FontAwesome6 name='bars-staggered' size={18} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <Carousel
          data={carouselImages}
          renderItem={renderCarouselItem}
          sliderWidth={width}
          itemWidth={width}
          layout={'default'}
          loop={true}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      {carouselImages[activeSlide]?.id === 2 ? (
        <View style={{ width: wp(100), height: hp(14), paddingHorizontal: '10%', justifyContent: 'center'}}>
          <Image source={require('../../../assets/find_icon.png')} style={{ width: wp(7), height: hp(3.5) }} />
          <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.6) }}>BIN FINDER</Text>
          <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#667085', fontSize: hp(1.7) }}>Discover Hidden Gems Near You</Text>
        </View>
      ) : null}
      {pagination()}
      </ImageBackground>
      {/* TOP BINS NEAR ME  */}
      <View style={{ flex: 1, width: '100%', height: hp(35) }}>
        <View style={{ marginTop: '7%', paddingHorizontal: '5%' }}>
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.4), color: '#000000' }}>TOP BINS NEAR ME</Text>
          <FlatList
            data={topBins}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* PRODUCTS  */}
      <View style={{ flex: 1, width: '100%', height: hp(30)}}>
        <View style={{ marginVertical: '0%', paddingHorizontal: '5%' }}>
        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.4), color: '#000000' }}>TOP BIN ITEM</Text>
        <FlatList
          data={products}
          renderItem={renderProductsItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        </View>
        </View>
      {/* MY FAVOURITES  */}
      <View style={{ flex: 1, width: '100%', height: hp(35) }}>
        <View style={{ marginVertical: '0%', paddingHorizontal: '5%' }}>
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.4), color: '#000000' }}>MY FAVOURITES</Text>
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
      {/* RESELLER IO PORTAL  */}
      <View style={{ flex: 1, width: '100%', height: hp(42) }}>
        <View style={{ marginVertical: '0%', paddingHorizontal: '5%' }}>
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.4), color: '#000000' }}>RESELLER IQ PORTAL</Text>
          <View style={{ width: '100%', height: hp(25), flexDirection: 'row', marginTop: '4%', justifyContent: 'space-between' }}>
            <Pressable style={{ width: wp(44), height: hp(24), borderRadius: 5, borderWidth: 0.5, borderColor: '#e6e6e6' }} onPress={() => navigation.navigate('IQPortal')}>
              <Image source={require('../../../assets/reseller_training.png')} style={{ width: wp(44), height: hp(13), borderRadius: 5 }} />
              <View style={{ margin: '6%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontFamily: 'Nunito-ExtraBold', color: '#0049AF', fontSize: hp(1.7) }}>Free Reseller Training</Text>
                  <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.2) }}>Reseller Training</Text>
                  <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.5), marginTop: '5%' }}>Full Video • With PDF</Text>
                </View>
              </View>
            </Pressable>
            <Pressable style={{ width: wp(44), height: hp(24), borderRadius: 5, borderWidth: 0.5, borderColor: '#e6e6e6' }}>
              <Image source={require('../../../assets/reseller_training.png')} style={{ width: wp(44), height: hp(13), borderRadius: 5 }} />
              <View style={{ margin: '6%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontFamily: 'Nunito-ExtraBold', color: '#0049AF', fontSize: hp(1.6) }}>Buy Pallets</Text>
                  <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.2) }}>Buy Pallets</Text>
                  <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.5), marginTop: '5%' }}>Full Video • With PDF</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(73),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '3%',
    marginTop: '13%',
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
  paginationContainer: {
    position: 'absolute',
    left: '43%',
    bottom: '-8%',
    width: wp(10),
    zIndex: 2
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
})
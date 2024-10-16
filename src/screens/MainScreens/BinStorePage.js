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
const BinStorePage = () => {
    const navigation = useNavigation();
    const [favouritePress, setFavouritePressed] = useState(false)
    const [activeSlide, setActiveSlide] = useState(1);
    const carouselImages = [
        {
            id: 1,
            image: require('../../../assets/bin_store_img.png')
        },
        {
            id: 2,
            image: require('../../../assets/bin_store_img.png')
        },
        {
            id: 3,
            image: require('../../../assets/bin_store_img.png')
        }
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
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
            </View>
        )
    };
    const renderMyFavourites = ({ item }) => (
        <View style={{ width: wp(47), height: hp(26) }}>
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
        </View>
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
        <ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
                <View style={styles.header}>
                    <View style={styles.headerChild}>
                  <Pressable onPress={() => navigation.goBack()}>
                        <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
                        </Pressable>
                        <Text style={styles.headerText}>Hidden Finds</Text>
                    </View>
                    <Pressable onPress={() => setFavouritePressed(!favouritePress)}>
                        <Ionicons name='heart' color={favouritePress ? '#EE2525' : '#99ABC6A1'} size={30} />
                    </Pressable>
                </View>
                <View style={styles.slider}>
                    <Carousel
                        data={carouselImages}
                        renderItem={renderItem}
                        sliderWidth={width}
                        itemWidth={width}
                        layout={'default'}
                        loop={true}
                        onSnapToItem={(index) => setActiveSlide(index)}
                    />
                    {pagination()}
                </View>
            </ImageBackground>
            <View style={styles.contentHeader}>
                <View style={styles.content}>
                    <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(2.5) }}>HIDDEN FINDS</Text>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.1) }}>All in one bin store</Text>
                    <Text style={{ fontFamily: 'Nunito-Regular', color: '#808488', fontSize: hp(2) }}>stores full address</Text>
                </View>
                <View style={styles.review}>
                    <FontAwesome name='star' color={'#FFD700'} size={17} />
                    <FontAwesome name='star' color={'#FFD700'} size={17} />
                    <FontAwesome name='star' color={'#FFD700'} size={17} />
                    <FontAwesome name='star' color={'#FFD700'} size={17} />
                    <FontAwesome name='star' color={'#e6e6e6'} size={17} />
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#828282', fontSize: hp(2.2) }}> 56,890</Text>
                </View>
            </View>
            <View style={styles.contentDetails}>
                <Text style={{ color: '#000', fontFamily: 'Nunito-SemiBold', fontSize: hp(2.2) }}>Store Details</Text>
                <Text style={{ color: '#000', fontFamily: 'Nunito-SemiBold', fontSize: hp(1.8), marginTop: '2%' }}>
                    Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the  ...More
                </Text>
            </View>
            <View style={styles.storeButtonsContainer}>
                <View style={styles.nearestStore}>
                    <Image source={require('../../../assets/location.png')} style={{width: wp(6.2), height: hp(2.2)}}/>
                    <Text style={{fontFamily: 'Nunito-SemiBold', color: '#828282', fontSize: hp(1.8)}}>Nearest Store</Text>
                </View>
                <View style={styles.nearestStore}>
                    <Image source={require('../../../assets/return_policy.png')} style={{width: wp(6.2), height: hp(2.2)}}/>
                    <Text style={{fontFamily: 'Nunito-SemiBold', color: '#828282', fontSize: hp(1.8)}}>Return Policy</Text>
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.viewSimilar}>
                <Image source={require('../../../assets/eye.png')} style={{width: wp(6.2), height: hp(2.2)}}/>
                    <Text style={{fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.1)}}>View Similar</Text>
                </View>
                <View style={styles.viewSimilar}>
                    <Image source={require('../../../assets/card.png')} style={{width: wp(6.2), height: hp(2.2)}}/>
                    <Text style={{fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.1)}}>Return Policy</Text>
                </View>
            </View>
                  {/* TRENDING PRODUCTS  */}
      <View style={{ flex: 1, width: '100%', height: hp(35) }}>
        <View style={{ marginVertical: '6%', paddingHorizontal: '5%' }}>
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.6), color: '#000000' }}>Trending Products</Text>
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
        </ScrollView>
    )
}

export default BinStorePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    vector: {
        flex: 1,
        width: wp(100),
        height: hp(42),
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
        width: wp(50),
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
    storeButtonsContainer : {
        width: '80%',
        height: hp(4),
        justifyContent:'center',
        alignSelf: 'center',
        marginVertical: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nearestStore : {
        width: '48%',
        borderWidth: 0.6,
        borderColor: '#828282',
        height: hp(4),
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButtons : {
        width: '90%',
        height: hp(7.5),
        justifyContent:'center',
        alignSelf: 'center',
        // marginVertical: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewSimilar : {
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
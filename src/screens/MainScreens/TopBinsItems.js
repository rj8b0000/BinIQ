import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
  StatusBar,
  Pressable,
  Image
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

// Component for individual list items
const ListItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
    </View>
    <TouchableOpacity style={styles.heartIcon}>
      <Ionicons name={item.isFavorite ? "heart" : "heart-outline"} size={24} color={item.isFavorite ? "red" : "gray"} />
    </TouchableOpacity>
  </View>
);

// Component for the Scan History tab
const ScanHistoryScreen = () => {
  const myFavourites = [{
    id: 1,
    image: require('../../../assets/gray_img.png'),
    description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
    discountPrice: '$65',
    originalPrice: '$151',
    totalDiscount: '60% off'
  },
  {
    id: 2,
    image: require('../../../assets/gray_img.png'),
    description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
    discountPrice: '$65',
    originalPrice: '$151',
    totalDiscount: '60% off'
  },
  {
    id: 3,
    image: require('../../../assets/gray_img.png'),
    description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
    discountPrice: '$65',
    originalPrice: '$151',
    totalDiscount: '60% off'
  },
  {
    id: 4,
    image: require('../../../assets/gray_img.png'),
    description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
    discountPrice: '$65',
    originalPrice: '$151',
    totalDiscount: '60% off'
  },
  ]

  return (
    <View style={{ flex: 1, width: '100%' }}>
    <View style={{ marginVertical: '4%', }}>
      <View style={{ marginVertical: '3%' }}>
        <FlatList
          data={myFavourites}
          renderItem={renderMyFavourites}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  </View>
  );
};

// Component for the My Items tab
const MyItemsScreen = () => {
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
    {
      id: 3,
      image: require('../../../assets/flip_find.png'),
      title: 'FLIP $ FIND',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 4,
      image: require('../../../assets/hidden_finds.png'),
      title: 'HIDDED FINDS',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
  ]
  const renderItem = ({ item }) => (
            <View style={{ width: wp(43.6), height: hp(23), borderRadius: 10, borderWidth: 0.5, borderColor: '#e6e6e6', backgroundColor: '#fff',marginHorizontal: '1%', marginVertical: '3%'}}>
        <Image source={item.image} style={{ width: wp(43.6), height: hp(13), borderRadius: 10 }} />
        <View style={{ margin: '6%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#0049AF', fontSize: hp(1.8) }}>{item.title}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.3) }}>{item.location}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.5) }}>{item.distance}</Text>
          </View>
          <View style={{ backgroundColor: '#FFBB36', height: hp(2), width: wp(8), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '1.5%', borderRadius: 4 }}>
            <FontAwesome name='star' size={8} color={'#fff'} />
            <Text style={{ color: '#fff', fontFamily: 'Nunito-Regular', fontSize: hp(1)}}>{item.review}</Text>
          </View>
        </View>
      </View>
  );

  return (
    <View style={{ flex: 1, width: '100%'}}>
      <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.6), color: '#000000', marginVertical: '2%' }}>FAV. BINS</Text>
      <View style={{width: '100%'}}>
      <FlatList
        data={topBins}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        // horizontal={true}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        // scrollEnabled={false}
      />
      </View>
  </View>
  );
};
const renderMyFavourites = ({ item }) => (
  <View style={{ width: wp(47), height: hp(26)}}>
    <View style={{ width: wp(45), height: hp(26), borderRadius: 5, borderWidth: 0.5, borderColor: '#e6e6e6' }}>
      <Image source={item.image} style={{ width: wp(45), height: hp(13), borderRadius: 5 }} />
      <Ionicons name='heart' size={hp(3)} color={'#EE2525'} style={{ position: 'absolute', right: '2%', top: '2%' }} />
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
const TopBinsItems = () => {
  const [activeTab, setActiveTab] = useState('scan'); // State to track which tab is active
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
            <Text style={styles.headerText}>Top Bins Items</Text>
          </View>
        </View>

        {/* Content for the active tab */}
        <ScrollView style={styles.content}>
          {/* <Text style={styles.sectionTitle}>TODAY</Text> */}
          {activeTab === 'scan' ? <ScanHistoryScreen /> : <MyItemsScreen />}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default TopBinsItems;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F3F5',
  },
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  backgroundBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
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
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '5%'
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#2CCCA6',
  },
  tabText: {
    fontSize: hp(2.2),
    fontFamily: 'Nunito-SemiBold',
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: 'gray',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: hp(2.2),
    fontFamily: 'Nunito-Bold',
    color: '#1E1E1E',
  },
  itemSubtitle: {
    fontSize: hp(1.9),
    fontFamily: 'Nunito-SemiBold',
    color: '#666',
  },
  heartIcon: {
    padding: 8,
  },
  list: {
    marginBottom: 100, // Adjust the margin if necessary
  },
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(50),
  },
  enrollNowContainer: {
    position: 'absolute',
    elevation: 5,
    width: wp(90),
    height: hp(18),
    backgroundColor: '#fff',
    bottom: hp(6),
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: '10%'
},
button: {
    backgroundColor: '#1a237e', // Dark purple color
    width: '80%',
    height: hp(5.6),
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 3, // This creates the shadow for the button
},
buttonText: {
    color: 'white',
    fontSize: hp(1.9),
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
},
});
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
  Image,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Star, Heart } from "lucide-react-native";

const { width } = Dimensions.get('window');

const ScanHistoryScreen = () => {

  return (
    <View style={{ width: '100%' }}>
      <View style={{ height: hp(40.5), flexDirection: 'row'}}>
        <View style={{ width: '60%', height: '100%',  justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../assets/pie_chart.png')} style={{ width: '90%', height: '90%'}} />
        </View>
        <View style={{ width: '38%', height: '100%', alignItems: 'flex-end' }}>
          <View style={{ height: '20%', width: '85%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#70B6C1', borderRadius: 20 }} />
              <Text style={{ color: '#00000061', fontWeight: 'bold', fontSize: hp(1.9) }}>Category 1</Text>
            </View>
            <View style={{ height: '75%', alignItems: 'flex-end' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.3) }}>45%</Text>
            </View>
          </View>
          <View style={{ height: '20%', width: '85%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#FF9F40', borderRadius: 20 }} />
              <Text style={{ color: '#00000061', fontWeight: 'bold', fontSize: hp(1.9) }}>Category 2</Text>
            </View>
            <View style={{ height: '75%', alignItems: 'flex-end' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.3) }}>45%</Text>
            </View>
          </View>
          <View style={{ height: '20%', width: '85%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#0049AF', borderRadius: 20 }} />
              <Text style={{ color: '#00000061', fontWeight: 'bold', fontSize: hp(1.9) }}>Category 3</Text>
            </View>
            <View style={{ height: '75%', alignItems: 'flex-end' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.3) }}>10%</Text>
            </View>
          </View>
          <View style={{ height: '20%', width: '85%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#0049AF', borderRadius: 20 }} />
              <Text style={{ color: '#00000061', fontWeight: 'bold', fontSize: hp(1.9) }}>Category 3</Text>
            </View>
            <View style={{ height: '75%', alignItems: 'flex-end' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.3) }}>10%</Text>
            </View>
          </View>
          <View style={{ height: '20%', width: '85%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#0049AF', borderRadius: 20 }} />
              <Text style={{ color: '#00000061', fontWeight: 'bold', fontSize: hp(1.9) }}>Category 3</Text>
            </View>
            <View style={{ height: '75%', alignItems: 'flex-end' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.3) }}>10%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '8%', paddingHorizontal: '2%' }}>
        <Text style={{ color: '#000000', fontFamily: 'Nunito-Bold', fontSize: hp(2.4) }}>MY ITEMS</Text>
        <Text style={{ color: '#524B6B', fontSize: hp(1.9), textDecorationLine: 'underline' }}>View All</Text>
      </View>
      <View style={{ marginBottom: '22%' }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item}/>}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      </View>
    </View>
  );
};

const MyItemsScreen = () => {
  return (
    <View style={{ marginBottom: '22%' }}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '7%', paddingHorizontal: '2%' }}>
        <Text style={{ color: '#000000', fontFamily: 'Nunito-Bold', fontSize: hp(2.5) }}>SCANS HISTORY</Text>
        <Text style={{ color: '#524B6B', fontSize: hp(2), textDecorationLine: 'underline' }}>View All</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};
const AllTotalScans = () => {
  return (
    <View style={{ marginBottom: '22%' }}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '7%', paddingHorizontal: '2%' }}>
        <Text style={{ color: '#000000', fontFamily: 'Nunito-Bold', fontSize: hp(2.5) }}>MY SCAN</Text>
        <Text style={{ color: '#524B6B', fontSize: hp(2), textDecorationLine: 'underline' }}>View All</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}
const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SinglePageItem')}>
    <Image source={require('../../../assets/dummy_product.png')} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.subtitle}>{product.subtitle}</Text>
    <View style={styles.ratingContainer}>
      <Star size={16} color="#FFD700" fill="#FFD700" />
      <Text style={styles.rating}>{product.rating}</Text>
      <Text style={styles.reviews}>{product.reviews} Reviews</Text>
    </View>
    <TouchableOpacity style={styles.heartButton}>
      <Heart size={18} color="red" />
    </TouchableOpacity>
  </TouchableOpacity>
  )
}
const products = [
  {
    id: "1",
    name: "TMA-2 HD Wireless",
    subtitle: "Hidden Finds",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  },
  {
    id: "2",
    name: "TMA-2 HD Wireless",
    subtitle: "ANC Store",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  },
  {
    id: "3",
    name: "TMA-2 HD Wireless",
    subtitle: "Hidden Finds",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  },
  {
    id: "4",
    name: "TMA-2 HD Wireless",
    subtitle: "ANC Store",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  },
  {
    id: "5",
    name: "TMA-2 HD Wireless",
    subtitle: "Best Sells Store",
    rating: 4.8,
    reviews: 88,
    image: "/placeholder.svg?height=150&width=150"
  },
  {
    id: "6",
    name: "TMA-2 HD Wireless",
    subtitle: "ANC Store",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  }
]
const MyLibrary = () => {
  const [activeTab, setActiveTab] = useState('scan');
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
            <Text style={styles.headerText}>My Library</Text>
          </View>
        </View>
        {/* Tab navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'scan' && styles.activeTab]}
            onPress={() => setActiveTab('scan')}
          >
            <Text style={[styles.tabText, activeTab === 'scan' && styles.activeTabText]}>My Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'items' && styles.activeTab]}
            onPress={() => setActiveTab('items')}
          >
            <Text style={[styles.tabText, activeTab === 'items' && styles.activeTabText]}>Scan History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'all_scans' && styles.activeTab]}
            onPress={() => setActiveTab('all_scans')}
          >
            <Text style={[styles.tabText, activeTab === 'all_scans' && styles.activeTabText]}>All Scans</Text>
          </TouchableOpacity>
        </View>

        {/* Content for the active tab */}
        <ScrollView style={styles.content}>
          {activeTab === 'scan' && <ScanHistoryScreen />}
          {activeTab === 'items' && <MyItemsScreen/>}
          {activeTab === 'all_scans' && <AllTotalScans/>}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

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
    // marginBottom: 16,
    width: '100%',
    paddingHorizontal: '5%',
    height: hp(6),
    marginVertical: '3%'
  },
  tab: {
    paddingVertical: '3%',
    paddingHorizontal: '4.5%',
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: '1%'
  },
  activeTab: {
    backgroundColor: '#2CCCA6',
    borderColor: '#2CCCA6',
  },
  tabText: {
    fontSize: hp(1.9),
    fontFamily: 'Nunito-SemiBold',
    color: '#000',
    justifyContent: 'center'

  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: '2%',
    paddingVertical: '2%'
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
    marginBottom: 100,
  },
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(50),
  },
  card: {
    margin: '1.5%',
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: '3%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  image: {
    width: "100%",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: '#000'
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "bold",
    color: '#000'
  },
  reviews: {
    marginLeft: 4,
    fontSize: 12,
    color: "#666"
  },
  heartButton: {
    position: "absolute",
    bottom: '2%',
    right: '1%',
    borderRadius: 15,
    padding: 5
  }
});

export default MyLibrary;

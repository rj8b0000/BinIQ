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
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
  const scanHistoryItems = [
    { id: '1', title: 'Beauty product', subtitle: 'All in one store', isFavorite: false },
    { id: '2', title: 'Beauty product', subtitle: 'All in one store', isFavorite: true },
    { id: '3', title: 'Beauty product', subtitle: 'All in one store', isFavorite: false },
    { id: '4', title: 'Beauty product', subtitle: 'All in one store', isFavorite: false },
    { id: '5', title: 'Beauty product', subtitle: 'All in one store', isFavorite: false },
  ];

  return (
    <FlatList
      data={scanHistoryItems}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

// Component for the My Items tab
const MyItemsScreen = () => {
  const myItems = [
    { id: '1', title: 'Flip & Find', subtitle: 'Florida, US', isFavorite: true },
    { id: '2', title: 'Sports Shoes', subtitle: 'From photo scan', isFavorite: false },
    { id: '3', title: 'Treasure Bin', subtitle: 'Florida, US', isFavorite: false },
    { id: '4', title: 'Hidden Finds', subtitle: 'Florida, US', isFavorite: false },
  ];

  return (
    <FlatList
      data={myItems}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

const MyLibrary = () => {
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
            <Text style={styles.headerText}>Buy Pallets</Text>
          </View>
        </View>

        {/* Tab navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'scan' && styles.activeTab]}
            onPress={() => setActiveTab('scan')}
          >
            <Text style={[styles.tabText, activeTab === 'scan' && styles.activeTabText]}>Scan History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'items' && styles.activeTab]}
            onPress={() => setActiveTab('items')}
          >
            <Text style={[styles.tabText, activeTab === 'items' && styles.activeTabText]}>My Items</Text>
          </TouchableOpacity>
        </View>

        {/* Content for the active tab */}
        <ScrollView style={styles.content}>
          <Text style={styles.sectionTitle}>TODAY</Text>
          {activeTab === 'scan' ? <ScanHistoryScreen /> : <MyItemsScreen />}
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
    marginBottom: 16,
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
});

export default MyLibrary;

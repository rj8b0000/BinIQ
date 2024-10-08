import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Dimensions,
  AccessibilityInfo,
  StatusBar,
  ImageBackground,
  Pressable,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const { width } = Dimensions.get('window');

const dummyRecentSearches = ['Toothpaste', 'Body Lotion', 'Hair Oil'];
const dummyPopularStores = ['Reseller 1', 'Reseller 2', 'Reseller 3', 'Reseller 4', 'Reseller 5', 'Reseller 6'];
const dummyCategories = ['Books', 'Pan', 'Bedsheet', 'Bins', 'Chopper', 'Clocks'];

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([80, 1000]);

  const renderRecentSearch = ({ item }) => (
    <View style={styles.recentSearchItem}>
      <Ionicons name="time-outline" size={hp(3)} color="#95969D" />
      <Text style={styles.recentSearchText}>{item}</Text>
      <TouchableOpacity
        accessibilityLabel={`Remove ${item} from recent searches`}
        accessibilityRole="button"
      >
        <EvilIcons name="close" size={hp(3)} color="#666" />
      </TouchableOpacity>
    </View>
  );

  const renderPopularStore = ({ item }) => (
    <TouchableOpacity
      style={styles.popularStoreItem}
      accessibilityLabel={`View ${item}`}
      accessibilityRole="button"
    >
      <Text style={styles.popularStoreText}>{item}</Text>
    </TouchableOpacity>
  );

  const toggleCategory = (category) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };

  const handleFilterButtonPress = () => {
    setShowFilterModal(true);
    AccessibilityInfo.announceForAccessibility('Filter modal opened');
  };

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
    AccessibilityInfo.announceForAccessibility('Filter modal closed');
  };

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
            <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
            <Text style={styles.headerText}>Search</Text>

          </View>
        </View>
        <View style={styles.searchParent}>
          <Pressable style={styles.searchContainer}>
            <View style={styles.cameraButton}>
              <Image source={require('../../../assets/camera.png')} style={{ width: wp(7) }}/>
            </View>
            {/* <Text style={styles.input}>search for anything</Text> */}
            <TextInput
              placeholder='search for anything'
              placeholderTextColor={'#999'}
              style={styles.input}
            />
            <View style={styles.searchButton}>
              <Image source={require('../../../assets/search.png')} style={{ width: wp(6) }} />
            </View>
          </Pressable>
          <TouchableOpacity style={styles.menuButton}>
            <FontAwesome6 name='bars-staggered' size={18} color={'#fff'} />
          </TouchableOpacity>
        </View>
      <View style={{marginHorizontal: '5%'}}>
      <Text style={styles.sectionTitle}>Recent Searches</Text>
      {dummyRecentSearches.length > 0 ? (
        <FlatList
          data={dummyRecentSearches}
          renderItem={renderRecentSearch}
          keyExtractor={(item) => item}
          accessibilityLabel="List of recent searches"
        />
      ) : (
        <Text style={styles.noHistoryText}>You don't have any search history</Text>
      )}

      <Text style={styles.sectionTitle}>Popular Bin stores</Text>
      <FlatList
        data={dummyPopularStores}
        renderItem={renderPopularStore}
        keyExtractor={(item) => item}
        numColumns={3}
        accessibilityLabel="List of popular bin stores"
      />

      <Modal
        visible={showFilterModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseFilterModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={handleCloseFilterModal}
                accessibilityLabel="Close filter modal"
                accessibilityRole="button"
              >
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Filters</Text>
              <TouchableOpacity accessibilityLabel="Apply filters" accessibilityRole="button">
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.categoryInput}
              placeholder="Add a categories"
              accessibilityLabel="Add a category"
            />

            <View style={styles.categoriesContainer}>
              {dummyCategories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryChip,
                    selectedCategories.includes(category) && styles.selectedCategoryChip,
                  ]}
                  onPress={() => toggleCategory(category)}
                  accessibilityLabel={`${category} category ${selectedCategories.includes(category) ? 'selected' : 'unselected'}`}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selectedCategories.includes(category) }}
                >
                  <Text style={styles.categoryChipText}>{category}</Text>
                  {selectedCategories.includes(category) && (
                    <Ionicons name="close" size={16} color="#007AFF" />
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.priceRangeTitle}>Price range</Text>
            <Text style={styles.priceRangeSubtitle}>The average price is 80</Text>

            <View style={styles.priceRangeContainer}>
              <Text style={styles.priceRangeValue}>${priceRange[0]}</Text>
              <Text style={styles.priceRangeValue}>${priceRange[1]}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.resetButton}
                accessibilityLabel="Reset filters"
                accessibilityRole="button"
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                accessibilityLabel="Apply filters"
                accessibilityRole="button"
              >
                <Text style={styles.applyButtonText}>APPLY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
      </ImageBackground>
    </View>

  );
};

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
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    color: 'gray',
    marginRight: '2%',
    borderWidth: 1,
    borderColor: '#356899',
    height: hp(6.5),
    width: wp(70),
    fontFamily: 'Nunito-Regular',
    fontSize: hp(2.2)
  },
  filterButton: {
    backgroundColor: '#14BA9C',
    width: wp(13),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: hp(2.4),
    fontFamily: 'Nunito-Bold',
    marginVertical: '4%',
    color: '#0D0D26'
  },
  noHistoryText: {
    color: '#666',
    fontStyle: 'italic',
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '4.5%',
    paddingHorizontal: '2%',
    borderBottomWidth: 1,
    borderColor: '#CACBCE'
  },
  recentSearchText: {
    marginLeft: '4%',
    flex: 1,
    fontFamily: 'Nunito-Regular',
    color: '#95969D',
    fontSize: hp(2.1)
  },
  popularStoreItem: {
    backgroundColor: '#F6F2F2B0',
    padding: 8,
    borderRadius: 8,
    width: (wp(85)) / 3,
    alignItems: 'center',
    marginVertical: '2%',
    marginHorizontal: '1%',
    borderWidth: 0.5,
    borderColor: '#C4C4C4'
  },
  popularStoreText: {
    textAlign: 'center',
    color: '#0D0D26',
    fontFamily: 'Nunito-Regular'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doneButton: {
    color: '#007AFF',
    fontSize: 16,
  },
  categoryInput: {
    height: 40,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
  },
  selectedCategoryChip: {
    backgroundColor: '#E6F3FF',
  },
  categoryChipText: {
    marginRight: 4,
  },
  priceRangeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceRangeSubtitle: {
    color: '#666',
    marginBottom: 8,
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  priceRangeValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  resetButtonText: {
    color: '#007AFF',
  },
  applyButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    color: '#0D0140'
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
});

export default SearchScreen;
import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Pressable
} from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


const { width, height } = Dimensions.get('window')
export default function UserProfileScreen({ openDrawer }) {
  const [isEnabled, setIsEnabled] = React.useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
        <View style={styles.header}>
          <View style={styles.headerChild}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
            </Pressable>
            <Text style={styles.headerText}>Settings</Text>
          </View>
          {/* <TouchableOpacity onPress={openDrawer}>
            <Ionicons name="menu" size={hp(3.5)} color="#0D0140" />
          </TouchableOpacity> */}
        </View>
        <SafeAreaView>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="notifications-outline" size={hp(3.3)} color="#14BA9C" />
                  <Text style={styles.settingText}>Notifications</Text>
                </View>
                <Switch
                  trackColor={{ false: "#767577", true: "#56CD54" }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('HelpAndSupport')}>
                <View style={styles.settingLeft}>
                  <Ionicons name="help-circle-outline" size={hp(3.3)} color="#14BA9C" />
                  <Text style={styles.settingText}>Help & Support</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="lock-closed-outline" size={hp(3.3)} color="#14BA9C" />
                  <Text style={styles.settingText}>Password</Text>
                </View>
                <Ionicons name="chevron-forward" size={hp(3.1)} color="#150B3D" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="log-out-outline" size={hp(3.3)} color="#14BA9C" />
                  <Text style={styles.settingText}>Logout</Text>
                </View>
                <Ionicons name="chevron-forward" size={hp(3.1)} color="#150B3D" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
      <ImageBackground source={require('../../../assets/vector_2.png')} style={styles.vector2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(100),
  },
  vector2: {
    flex: 1,
    width: wp(100),
    height: height * 0.5,
    position: 'absolute',
    bottom: 0,
    zIndex: -1
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
    width: wp(35),
    justifyContent: 'space-between'
  },
  headerText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp(3.2),
    textAlign: 'left',
    color: '#0D0140'
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    elevation: 2,
    backgroundColor: '#fff',
    marginVertical: '2%',
    borderRadius: 10,
    paddingHorizontal: '5%'
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  settingText: {
    marginLeft: 16,
    fontSize: hp(2.3),
    color: '#150B3D',
    fontFamily: 'Nunito-Regular'
  }
})

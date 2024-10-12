import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions
} from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import Ionicons from "react-native-vector-icons/Ionicons"

const { width } = Dimensions.get("window")

const CustomDrawer = ({ isOpen, closeDrawer }) => {
  const navigation = useNavigation();
  const translateX = React.useRef(new Animated.Value(-width)).current

  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOpen ? 0 : -width,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [isOpen])

  const menuItems = [
    // { icon: "person-outline", label: "Edit Profile", goto:  'EditProfile' },
    { icon: "notifications-outline", label: "Notification", goto : 'Notifications' },
    { icon: "chatbox-outline", label: "Feedback", goto : 'Feedback'},
    // { icon: "lock-closed-outline", label: "Change Password", goto: 'null'},
    { icon: "help-circle-outline", label: "Help", goto: 'HelpAndSupport'},
    { icon: "gift-outline", label: "Referral Program", goto : 'ReferFriend'},
    // { icon: "settings-outline", label: "Settings"}
  ]

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
      <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
        <Ionicons name="close" size={hp(3.4)} color="black" />
      </TouchableOpacity>
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/profile_img.png")}
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>User Name</Text>
      </View>
      <ScrollView style={styles.menuItems}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => navigation.navigate(item.goto)}>
            <Ionicons name={item.icon} size={24} color="#14BA9C" />
            <Text style={styles.menuItemLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
             <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: width * 0.8,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    paddingVertical: '5%'
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 20
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  profileName: {
    fontSize: hp(2.7),
    color: '#0D0D26',
    fontFamily: 'Nunito-Bold'
  },
  menuItems: {
    flex: 1
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15
  },
  menuItemLabel: {
    marginLeft: 15,
    fontSize: hp(2.3),
    color: '#0D0D26',
    fontFamily: 'Nunito-SemiBold'
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderTopColor: "#f0f0f0"
  },
  logoutText: {
    marginLeft: 15,
    color: "red",
    fontSize: hp(2.3),
    fontFamily: 'Nunito-SemiBold'
  }
})

export default CustomDrawer

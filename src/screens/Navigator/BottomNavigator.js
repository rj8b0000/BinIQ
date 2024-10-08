import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../MainScreens/HomeScreen';
import FavouratiesScreen from '../MainScreens/FavouratiesScreen';
import MyLibrary from '../MainScreens/MyLibrary';
import SettingsScreen from '../MainScreens/SettingsScreen';
import CustomTabBar from '../../Components/CustomTabBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Image } from 'react-native-svg';
import MapScreen from '../MainScreens/MapScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    function getWidth() {
        let width = Dimensions.get('window').width;
        width = width - 100
        return width / 5
    }
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#E6E6E6',
                        position: 'absolute',
                        height: hp(7.5),
                        borderRadius: 10,
                        shadowColor: '#000',
                        shadowOpacity: 0.06,
                        shadowOffset: {
                            width: 10,
                            height: 10
                        },
                    },
                }}
            >
                <Tab.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ position: 'absolute' }}>
                                <AntDesign name='home' size={hp(3.5)} color={focused ? '#14BA9C' : '#293032'} />
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
                <Tab.Screen
                    name='FavouritesScreen'
                    component={FavouratiesScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ position: 'absolute' }}>
                                <Ionicons name='heart' size={hp(3.5)} color={focused ? '#14BA9C' : '#293032'} />
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth(),
                                useNativeDriver: true
                            }).start();
                        }
                    })} />
                <Tab.Screen
                    name='MapScreen'
                    component={MapScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <TouchableOpacity>
                                <View style={{ width: 60, height: 60, backgroundColor: '#14BA9C', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
                                    <AntDesign name='plus' size={hp(4.2)} color={'white'} />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <Tab.Screen
                    name='MyLibrary'
                    component={MyLibrary}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ position: 'absolute' }}>
                                <Ionicons name='library' size={hp(3.2)} color={focused ? '#14BA9C' : '#293032'} />
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 3,
                                useNativeDriver: true
                            }).start();
                        }
                    })} />
                <Tab.Screen
                    name='SettingsScreen'
                    component={SettingsScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ position: 'absolute' }}>
                                <FontAwesome6 name='user-large' size={hp(3)} color={focused ? '#14BA9C' : '#293032'} />
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 4,
                                useNativeDriver: true
                            }).start();
                        }
                    })} />


            </Tab.Navigator>
        </>


    )
}

export default BottomNavigator

const styles = StyleSheet.create({})
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import UserProfileScreen from './UserProfileScreen';
import CustomDrawer from '../../Components/CustomDrawer';

export default SettingsScreen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <View style={styles.container}>
      <UserProfileScreen openDrawer={toggleDrawer} />
      <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
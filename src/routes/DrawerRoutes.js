import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EventList from "../screens/eventList/EventListPage"
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen
      name="EventList"
      options={{drawerLabel: 'Event List'}}
      component={EventList}
    />
  </Drawer.Navigator>
  )
}

export default DrawerRoutes

const styles = StyleSheet.create({})
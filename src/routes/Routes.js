import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigationRoutes from '../routes/DrawerRoutes'
import EventList from "../screens/eventList/EventListPage"
import UserRegistrationForm from '../screens/userRegistrationForm/UserRegistrationForm';
import NewEventScreen from '../screens/eventList/NewEventCreation'
import EventDetailsScreen from '../screens/eventList/EventDetailscreen'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Registration({navigation}) {
  return (
   <UserRegistrationForm 
    navigation = {navigation}
   />
  );
}
const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Registration">
      {/* Auth Navigator which includer Login Signup will come once */}
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      {/* Navigation Drawer as a landing page */}
      <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerNavigationRoutes}
        // Hiding header for Navigation Drawer as we will use our custom header
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="NewEventScreen"
      component={NewEventScreen}
      />
      <Stack.Screen
      name="EventDetailsScreen"
      component={EventDetailsScreen}
      />
      {/* <Drawer.Screen
      name="EventList"
      options={{drawerLabel: 'Home Screen'}}
      component={EventList}
    /> */}
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})
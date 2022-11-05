import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants/Color';
import { Booking, Home, Profile } from "../Screens/index";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
function HomeStack() {

  const HomeTabStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false, }} component={Home} />
      </Stack.Navigator>
    )
  }

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.themColor, tabBarInactiveTintColor: colors.black }}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo name='home' size={30} color={focused ? colors.themColor : colors.black} />
            )
          }
        }}
        name="Home" component={HomeTabStack} />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons name='book-edit-outline' size={30} color={focused ? colors.themColor : colors.black} />
            )
          }
        }}
        name="Booking" component={Booking} />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo name='user' size={30} color={focused ? colors.themColor : colors.black} />
            )
          }
        }}
        name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
}
export default HomeStack
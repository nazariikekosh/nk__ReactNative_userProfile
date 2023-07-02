import {View, Text, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Settings from '../screens/Settings';
import Messages from '../screens/Messages';
import Home from '../screens/Home';
import Create from '../screens/Create';
import Profile from '../screens/Profile';



import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: COLORS.white,
  },
};

const BottomTabsNav = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SimpleLineIcons
                name="home"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                  height: Platform.OS == 'ios' ? 50 : 60,
                  width: Platform.OS == 'ios' ? 50 : 60,
                  top: Platform.OS == 'ios' ? -10 : -20,
                  borderRadius: Platform.OS == 'ios' ? 25 : 30,
                  borderWidth: 2,
                  borderColor: COLORS.white,
                }}>
                <Fontisto name="plus-a" size={24} color={COLORS.white} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="settings"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="person-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNav;

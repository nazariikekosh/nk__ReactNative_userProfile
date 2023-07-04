import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNav from './navigations/BottomTabsNav';
import {EditProfile} from './screens';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabsNavigation">
        <Stack.Screen
          name="BottomTabsNavigation"
          component={BottomTabsNav}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

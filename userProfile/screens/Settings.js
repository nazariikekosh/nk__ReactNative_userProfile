import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {COLORS} from '../constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Settings = ({navigation}) => {

  const navigateToEditProfile = () => {
    // navigation.navigate("EditProfile")
    console.log('EditProfile function')
  };
  const navigateToSecurity = () => {
    console.log('Security function')
  };
  const navigateToNotifications = () => {
    console.log('Notifications function')
  };
  const navigateToPrivacy = () => {
    console.log('Privacy function')
  }


  const accountItems = [
    {icon:"person-outline", text: "Edit Profile", action: navigateToEditProfile},
    {icon: "security", text: "Security", action: navigateToSecurity},
    {icon: "notifications-none", text: "Notifications", action: navigateToNotifications},
    {icon: "lock-outline", text: "Privacy", action: navigateToPrivacy},
  ];

  const renderSettingsItem = ({icon, text, action}) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text style={{
        marginLeft: 36,
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 600,
      }}>{text}</Text>

    </TouchableOpacity>

  )

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.white
    }}>
      <View style={{marginHorizontal: 12, flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{position: 'absolute', left: 0,}}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 24, fontWeight: 'bold', fontFamily: 'Inter'}}>Settings</Text>
      </View>

      {/* Account Seting*/}

    <View style={{marginBottom: 12, marginHorizontal: 20}}>
      <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold', fontFamily: 'Inter', marginVertical: 10}}>Account</Text>
      <View style={{borderRadius: 12, backgroundColor: COLORS.gray}}>
      {
        accountItems.map ((item, index) => (
          <React.Fragment key={index}>
            {renderSettingsItem(item)}
          </React.Fragment>
        ) )
      }
      </View>
    </View>

    </SafeAreaView>
  )
}

export default Settings
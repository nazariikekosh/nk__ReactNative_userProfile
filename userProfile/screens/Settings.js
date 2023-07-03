import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {COLORS} from '../constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Settings = ({navigation}) => {
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
    </SafeAreaView>
  )
}

export default Settings
import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, images } from '../constants'

const Profile = () => {
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: COLORS.white}}>
        <StatusBar backgroundColor={COLORS.gray}  barStyle="dark-content" />
        <View style={{ width: '100%'}}>
        <Image 
            source={images.cover}
            resizeMode='cover'
            style={{
                height: 228,
                width: '100%',
            }}
        />
        </View>

        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <Image 
                source={images.profile}
                resizeMode='contain'
                style={{
                    height: 155,
                    width: 155,
                    borderRadius: 999,
                    borderColor: COLORS.primary,
                    borderWidth: 2,
                    marginTop: -90
                }}
            />
            
        </View>
        
    </SafeAreaView>
  )
}

export default Profile
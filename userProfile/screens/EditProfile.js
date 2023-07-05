import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React, {useState}  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { imagesDataURL } from '../constants/data';

const EditProfile = ({navigation}) => {

  const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
  const handleImageSelection = () => {
    
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: 22
    }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 0}}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={30}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Inter',
          }}>
          Edit Profile
        </Text>
      </View>

      <ScrollView>
        <View style={{
          alignItems: 'center',
          marginVertical: 22
        }}>
          <TouchableOpacity onPress={handleImageSelection}>
            <Image 
              source={{uri: selectedImage}}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary
              }}
            />
            <View style={{
              position: 'absolute',
              bottom: 0,
              right: 10,
              zIndex: 9999
            }}>
              <MaterialIcons name='photo-camera' size={32} color={COLORS.primary} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default EditProfile;
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {imagesDataURL} from '../constants/data';
import * as ImagePicker from 'react-native-image-picker';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';

const EditProfile = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
  const [name, setName] = useState('Melissa Peters');
  const [email, setEmail] = useState('metperters@gmail.com');
  const [password, setPassword] = useState('randompassword');
  const [country, setCountry] = useState('Nigeria');

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'YYYY/MM/DD',
  );
  const [selectedStartDate, setSelectedStartDate] = useState('01/01/1990');
  const [startedDate, setStartedDate] = useState('12/12/2023');

  const handleChangeStartDate = propDate => {
    setStartedDate(propDate);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  function renderDatePicker() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              padding: 35,
              width: '90%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={date => setSelectedStartDate(date)}
              options={{
                backgroundColor: COLORS.primary,
                textHeaderColor: '#469ab6',
                textDefaultColor: COLORS.white,
                selectedTextColor: COLORS.white,
                mainColor: '#469ab6',
                textSecondaryColor: COLORS.white,
                borderColor: 'rgba(122,146,165,0.1)',
              }}
            />
            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: 'bold',
                  fontSize: 16,
                }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 22,
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

      {/* ---Content--- */}

      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 22,
          }}>
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{uri: selectedImage}}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}>
              <MaterialIcons
                name="photo-camera"
                size={32}
                color={COLORS.primary}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          {/* ---Name--- */}

          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 16,
                fontWeight: 700,
                color: COLORS.black,
              }}>
              Name
            </Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 12,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                value={name}
                onChangeText={value => setName(value)}
                editable={true}
              />
            </View>
          </View>

          {/*--- Email ---*/}

          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 16,
                fontWeight: 700,
                color: COLORS.black,
              }}>
              Email
            </Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 12,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
                editable={true}
              />
            </View>
          </View>

          {/*--- Password ---*/}

          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 16,
                fontWeight: 700,
                color: COLORS.black,
              }}>
              Password
            </Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 12,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                value={password}
                onChangeText={value => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
          </View>

          {/*--- Date of Birth ---*/}

          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 16,
                fontWeight: 700,
                color: COLORS.black,
              }}>
              Date of Birth
            </Text>

            <TouchableOpacity
              onPress={handleOnPressStartDate}
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 12,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <Text>{selectedStartDate}</Text>
            </TouchableOpacity>
          </View>

          {/* ---Country--- */}

          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 16,
                fontWeight: 700,
                color: COLORS.black,
              }}>
              Country/Region
            </Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 12,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                value={country}
                onChangeText={value => setCountry(value)}
                editable={true}
              />
            </View>
          </View>
        </View>
        {renderDatePicker()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

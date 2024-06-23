import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Setting_Style from '../Stylesheet/SettingsStyle';
import SettingsHeader from '../Utils/SettingsHeader';
import Camera_Icon from '../Assets/Settings/Camera_Icon';
import Login_Style from '../Stylesheet/LoginStyle';
import UserIcon from '../Assets/Login/SVG/usericon';
import Mail_icon from '../Assets/Drawer/mail_icon';
import Lock_icon from '../Assets/Settings/Lock';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = useState('');
  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('loggedInUser');
      setUserDetails(JSON.parse(userData)); // Parse and set the user details
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    setUserName(userDetails?.data?.username);
    setEmail(userDetails?.data?.email);
  }, [userDetails]);

  return (
    <View style={Setting_Style.centerview}>
      <SettingsHeader navigation={navigation} />
      <View style={Setting_Style.profileview}>
        <>
          <View style={Setting_Style.pictureview}>
            <Image
              source={{
                uri:
                  userDetails && userDetails.data?.profile_image
                    ? userDetails.data.profile_image
                    : '',
              }}
              style={Setting_Style.Logo}
            />
          </View>
          <View style={Setting_Style.cameraicon}>
            <Camera_Icon height={30} width={30} color="yellow" />
          </View>
        </>
        <View style={{margin: 10, alignItems: 'center'}}>
          <Text style={Setting_Style.font}>
            {' '}
            {userDetails && userDetails.data?.username
              ? userDetails.data.username
              : null}
          </Text>
          <Text>
            {' '}
            {userDetails && userDetails.data?.designation
              ? userDetails.data.designation
              : null}
          </Text>
        </View>
      </View>
      {/* // text field area */}
      <View style={Setting_Style.TextInputarea}>
        <Text style={Setting_Style.headingtext}>Username</Text>
        <View style={Login_Style.Textinputwrapper}>
          <View style={{position: 'absolute', left: 5}}>
            <UserIcon height={15} width={20} />
          </View>

          <TextInput
            style={Login_Style.Textinput_email}
            onChangeText={setUserName}
            value={userName}
            keyboardType="user_name"
          />
        </View>
        <Text style={Setting_Style.headingtext}>Email</Text>
        <View style={Login_Style.Textinputwrapper}>
          <View style={{position: 'absolute', left: 5}}>
            <Mail_icon height={24} width={20} />
          </View>

          <TextInput
            style={Login_Style.Textinput_email}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
        </View>

        <View style={Login_Style.Textinputwrapper}>
          <View style={{position: 'absolute', left: 5}}>
            <Lock_icon height={15} width={20} />
          </View>

          <TouchableOpacity style={Login_Style.Textinput_email}>
            <Text style={Setting_Style.headingtext}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

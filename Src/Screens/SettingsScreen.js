import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import Setting_Style from '../Stylesheet/SettingsStyle';
import SettingsHeader from '../Utils/SettingsHeader';
import Camera_Icon from '../Assets/Settings/Camera_Icon';
import Login_Style from '../Stylesheet/LoginStyle';
import UserIcon from '../Assets/Login/SVG/usericon';
import Mail_icon from '../Assets/Drawer/mail_icon';
import Lock_icon from '../Assets/Settings/Lock';

const SettingsScreen = () => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={Setting_Style.centerview}>
      <SettingsHeader />
      <View style={Setting_Style.profileview}>
        <View style={Setting_Style.circleview}>
          <View style={Setting_Style.cameraicon}>
            <Camera_Icon height={30} width={30} color="yellow" />
          </View>
        </View>
        <View style={{margin: 10, alignItems: 'center'}}>
          <Text style={Setting_Style.font}>Alpasalam Demicri</Text>
          <Text>User Designation</Text>
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
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
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

          <TextInput
            style={Login_Style.Textinput_email}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            placeholder="Reset Password"
          />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

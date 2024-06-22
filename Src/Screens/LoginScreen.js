import {
  View,
  ImageBackground,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Login_Style from '../Stylesheet/LoginStyle';
import Svg, {Path} from 'react-native-svg';
import UserIcon from '../Assets/Login/SVG/usericon';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={Login_Style.centerview}>
      <ImageBackground
        source={require('../Assets/Login/bg1.png')}
        style={Login_Style.Imagebackgroundstyle}>
        <View style={Login_Style.upperportion}>
          <View style={Login_Style.Logo_position}>
            <Image
              source={require('../Assets/Login/Logo.png')}
              style={Login_Style.Logo}
            />
          </View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Sign In</Text>
        </View>
      </ImageBackground>
      <View style={Login_Style.loginposition}>
        <View style={Login_Style.logincard}>
          <Text style={{marginLeft: 10}}>Username</Text>
          <View style={Login_Style.Textinputwrapper}>
            <View style={{position: 'absolute', left: 5}}>
              <UserIcon height={24} width={20} />
            </View>

            <TextInput
              style={Login_Style.Textinput_email}
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
          </View>
          <Text style={{marginLeft: 10}}>password</Text>
          <TextInput
            style={Login_Style.Textinput_email}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          <View style={Login_Style.forgotpassword}>
            <Text>Forgot Password ?</Text>
          </View>
          <TouchableOpacity style={Login_Style.signInbutton}>
            <Text style={{color: 'white', fontWeight: '900'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

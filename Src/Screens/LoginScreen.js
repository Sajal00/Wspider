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
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
          <Text style={{marginLeft: 10}}>Email</Text>
          <TextInput
            style={Login_Style.Textinput_email}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
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

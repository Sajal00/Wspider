import {View, ImageBackground, Image, Text} from 'react-native';
import React from 'react';
import Login_Style from '../Stylesheet/LoginStyle';

const LoginScreen = () => {
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
        <Text>Login area</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

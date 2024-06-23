import {
  View,
  ImageBackground,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Login_Style from '../Stylesheet/LoginStyle';
// import Svg, {Path} from 'react-native-svg';
import UserIcon from '../Assets/Login/SVG/usericon';
import PasswordIcon from '../Assets/Login/SVG/Passwordicon';
import Closedeye from '../Assets/Login/SVG/Closedeye';
import Openeyeicon from '../Assets/Login/SVG/Openeyeicon';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleSignin = () => {
    navigation.replace('DashBoard');
  };
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
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
              <View style={Login_Style.Textinputwrapper}>
                <View style={{position: 'absolute', left: 5}}>
                  <PasswordIcon height={24} width={20} />
                </View>

                <TextInput
                  style={Login_Style.Textinput_email}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 5,
                    height: 40,
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => togglePasswordVisibility()}>
                  {isPasswordVisible ? (
                    <Openeyeicon width={24} height={24} />
                  ) : (
                    <Closedeye width={24} height={24} />
                  )}
                </TouchableOpacity>
              </View>
              <View style={Login_Style.forgotpassword}>
                <Text>Forgot Password ?</Text>
              </View>
              <TouchableOpacity
                style={Login_Style.signInbutton}
                onPress={handleSignin}>
                <Text style={{color: 'white', fontWeight: '900'}}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

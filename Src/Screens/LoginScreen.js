import {
  View,
  ImageBackground,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
  Keyboard,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Login_Style from '../Stylesheet/LoginStyle';
// import Svg, {Path} from 'react-native-svg';
import UserIcon from '../Assets/Login/SVG/usericon';
import PasswordIcon from '../Assets/Login/SVG/Passwordicon';
import Closedeye from '../Assets/Login/SVG/Closedeye';
import Openeyeicon from '../Assets/Login/SVG/Openeyeicon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    if (email == '' || password == '') {
      Alert.alert('Please Enter all the fields');
    } else {
      setLoading(true);
      try {
        const response = await fetch('https://api.hidromas.nl/user-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: 'hidromas-we-app-01~c^Dt0Oc32',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const result = await response.json();
        console.log('my api result', JSON.stringify(result));
        if (result.status == 0 && result.msg == 'Success') {
          // Alert.alert('Login Successful', 'Welcome, ' + result.data.username);
          await AsyncStorage.setItem('loggedInUser', JSON.stringify(result));
          navigation.replace('DashBoard');
        } else {
          Alert.alert('Error', 'An error occurred. Please try again.');
        }
      } catch (error) {
        console.error('error', error);
        Alert.alert(
          'Error',
          'An error occurred. Please check your network and try again.',
        );
      } finally {
        setLoading(false);
      }
    }
  };

  const headerComponent = () => {
    return (
      <KeyboardAvoidingView
        style={{height: deviceHeight, width: deviceWidth}}
        behavior="padding">
        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
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
                  <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                    Sign In
                  </Text>
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
                  {loading ? (
                    <ActivityIndicator
                      size="large"
                      color="#0000ff"
                      style={Login_Style.loader}
                    />
                  ) : (
                    <TouchableOpacity
                      style={Login_Style.signInbutton}
                      onPress={handleLogin}>
                      <Text style={{color: 'white', fontWeight: '900'}}>
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };

  const refreshHandler = () => {
    setEmail('');
    setPassword('');
    setIsPasswordVisible(false);
    setLoading(false);
  };

  return (
    <>
      <FlatList
        style={{flex: 1}}
        data={[]}
        showsVerticalScrollIndicator={false}
        keyExtractor={() => 'key'}
        renderItem={null}
        ListHeaderComponent={headerComponent()}
        onRefresh={() => refreshHandler()}
        refreshing={false}></FlatList>
    </>
  );
};

export default LoginScreen;

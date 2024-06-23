import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  var timer = 0;

  useEffect(() => {
    getUserData();
    return () => clearTimeout(timer);
  }, []);

  const getUserData = async () => {
    const userDetails = await AsyncStorage.getItem('loggedInUser');
    console.log('userDetails at splash', userDetails && userDetails);

    timer = setTimeout(() => {
      if (userDetails != null) {
        navigation.replace('DashBoard');
      } else {
        navigation.replace('Login');
      }
    }, 2000);
  };

  return (
    <>
      <ImageBackground
        source={require('../Assets/Splash/bg2.png')}
        style={styles.container}>
        <View style={styles.splashimages}>
          <Image
            source={require('../Assets/Splash/splashil.png')}
            style={{
              height: '80%',
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <Image
            source={require('../Assets/Splash/logo.png')}
            style={{
              height: '10%',
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashimages: {
    flexDirection: 'column',
    height: '60%',
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default SplashScreen;

import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
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

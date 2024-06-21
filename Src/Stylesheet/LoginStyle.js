import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Login_Style = StyleSheet.create({
  centerview: {
    flex: 1,
    backgroundColor: 'white',
  },
  upperportion: {
    flexDirection: 'column',
    alignSelf: 'center',
    // backgroundColor: 'red',
    height: deviceHeight / 3,
    justifyContent: 'space-around',
    marginBottom: 50,
    alignItems: 'center',
  },
  Imagebackgroundstyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight / 1.8,
    width: deviceWidth,
  },
  Logo_position: {
    height: deviceHeight / 9,
    width: deviceWidth / 2,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Logo: {
    flex: 1,
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  loginposition: {
    position: 'absolute',
    top: deviceHeight / 1.8 - 30,
    width: deviceWidth,
    height: deviceHeight / 1.8,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 0.5, // Ensure this view is on top
    justifyContent: 'center',
  },
});
export default Login_Style;

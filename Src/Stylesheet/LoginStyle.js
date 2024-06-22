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
    zIndex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logincard: {
    // backgroundColor: 'red',
    height: deviceHeight / 2.9,
    justifyContent: 'space-around',
  },
  Textinputwrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textinput_email: {
    borderWidth: 0.2,
    height: deviceHeight / 17,
    width: deviceWidth / 1.3,
    alignSelf: 'center',
    borderRadius: 3,
    paddingHorizontal: 30,
  },
  forgotpassword: {
    // backgroundColor: 'pink',
    height: deviceHeight / 24,
    width: deviceWidth / 1.5,
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  signInbutton: {
    backgroundColor: 'blue',
    height: deviceHeight / 17,
    width: deviceWidth / 1.3,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login_Style;

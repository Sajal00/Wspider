import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Header_style = StyleSheet.create({
  mainview: {
    height: deviceHeight / 16,
    width: deviceWidth,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logopostion: {
    // backgroundColor: 'yellow',
    width: deviceWidth / 2.4,
    height: deviceHeight / 16,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Logo: {
    flex: 1,
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
});
export default Header_style;

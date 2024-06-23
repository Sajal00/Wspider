import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Setting_Style = StyleSheet.create({
  centerview: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  header: {
    height: deviceHeight / 16,
    width: deviceWidth,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Settingtext: {
    // backgroundColor: 'yellow',
    width: deviceWidth / 5,
    height: deviceHeight / 16,
    justifyContent: 'center',
    right: 70,
  },
  font: {
    fontWeight: '600',
  },
  profileview: {
    height: deviceHeight / 3,
    width: '80%',
    // backgroundColor: 'red',
    alignSelf: 'center',
    // margin: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleview: {
    height: 120,
    width: 120,
    borderRadius: 60,
    // backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  pictureview: {
    width: deviceWidth / 3,
    height: deviceHeight / 6,
    borderRadius: 360,
  },
  Logo: {
    // flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 360,
  },
  cameraicon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    position: 'absolute',
    right: 90,
    top: 120,
  },
  TextInputarea: {
    height: deviceHeight / 2.6,
    width: '80%',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headingtext: {
    alignSelf: 'flex-start',
    left: 6,
  },
});
export default Setting_Style;

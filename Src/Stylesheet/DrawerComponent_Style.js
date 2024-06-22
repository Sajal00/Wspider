import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Drawercomponent_style = StyleSheet.create({
  header_position: {
    height: deviceHeight / 4,
    width: '100%',
    backgroundColor: 'green',
  },
  menubackground: {
    height: deviceHeight / 4,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pictureview: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: 'red',
  },
  profiledetailsview: {
    width: '60%',
    height: deviceHeight / 10,
    // backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10,
    // margin: 5,
  },
  profiledetailSubline: {
    height: '20%',
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    right: 4,
    marginTop: 5,
  },
  settingscard: {
    height: deviceHeight / 12,
    width: '90%',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconview: {
    height: deviceHeight / 20,
    width: '15%',
    backgroundColor: 'white',
    margin: 10,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  bottompart: {
    height: deviceHeight / 3,
    width: '90%',
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  bottomsubcontent: {
    height: deviceHeight / 7,
    width: '100%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoview: {
    // backgroundColor: 'grey',
    height: deviceHeight / 12,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutView: {
    height: deviceHeight / 10,
    width: '60%',
    // backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    right: 9,
  },
  logouticon: {
    height: deviceHeight / 25,
    width: '30%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 5,
  },
});
export default Drawercomponent_style;

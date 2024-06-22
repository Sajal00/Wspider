import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Dashboard_style = StyleSheet.create({
  middle: {
    // backgroundColor: 'red',
    // height: deviceHeight / 3,
    width: deviceWidth,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  checkinContainer: {
    height: deviceHeight / 4,
    width: deviceWidth / 2.5,
    marginTop: 20,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  travelExpenceContainer: {
    height: deviceHeight / 4,
    width: deviceWidth / 2.5,
    marginTop: 20,
    // backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  checkinoutdetailsscroll: {
    flex: 1,
    marginTop: 30,
  },
  card: {
    backgroundColor: '#fff',
    // width: deviceWidth / 1.5,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  firstView: {
    // backgroundColor: 'yellow',
    height: deviceHeight / 9,
    width: deviceWidth / 1.7,
    alignSelf: 'center',
  },
  secondView: {
    height: deviceHeight / 9,
    width: deviceWidth / 5,
    alignSelf: 'center',
    backgroundColor: 'orange',
    paddingTop: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
  },
  detailsView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
    paddingLeft: 4,
  },
  details: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'grey',
    alignSelf: 'center',
    marginBottom: 20,
  },
  checkouttitle: {
    color: 'white',
  },
});
export default Dashboard_style;

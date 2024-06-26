import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Drawercomponent_style from '../Stylesheet/DrawerComponent_Style';
import Phonecall_Icon from '../Assets/Drawer/Phonecall_icon';
import Mail_icon from '../Assets/Drawer/mail_icon';
import Settings_icon from '../Assets/Drawer/Settings_icon';
import CheckIn_Icon from '../Assets/Dashboard/SVG/checkinIcon';
import MyExpense_icon from '../Assets/Drawer/myExpenses_icon';
import Logout_icon from '../Assets/Drawer/Logout_icon';
import Logo_icon from '../Assets/Drawer/Logo_icon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer_component = ({navigation}) => {
  const [userDetails, setUserDetails] = useState('');
  const handleSettings = () => {
    navigation.navigate('Settings');
  };
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('loggedInUser');
      setUserDetails(JSON.parse(userData)); // Parse and set the user details
    } catch (e) {
      // error reading value
    }
  };

  const handleLogOut = () => {
    AsyncStorage.removeItem('loggedInUser');
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={Drawercomponent_style.header_position}>
        <ImageBackground
          source={require('../Assets/Drawer/menu_back.png')}
          style={Drawercomponent_style.menubackground}>
          <View style={Drawercomponent_style.pictureview}>
            <Image
              source={{
                uri:
                  userDetails && userDetails.data?.profile_image
                    ? userDetails.data.profile_image
                    : '',
              }}
              style={Drawercomponent_style.Logo}
            />
          </View>
          <View style={Drawercomponent_style.profiledetailsview}>
            <Text style={{color: 'white'}}>
              {userDetails && userDetails.data?.username
                ? userDetails.data.username
                : null}
            </Text>
            <View style={Drawercomponent_style.profiledetailSubline}>
              <Mail_icon
                height={20}
                width={20}
                color="white"
                second_color="white"
              />
              <Text style={{fontSize: 10, color: 'white'}}>
                {userDetails && userDetails.data?.email
                  ? userDetails.data.email
                  : null}
              </Text>
            </View>
            <View style={Drawercomponent_style.profiledetailSubline}>
              <Phonecall_Icon
                height={20}
                width={20}
                color="white"
                second_color="white"
                third_color="white"
              />
              <Text style={{fontSize: 10, color: 'white'}}>
                {userDetails && userDetails.data?.phone
                  ? userDetails.data.phone
                  : null}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <TouchableOpacity
        style={Drawercomponent_style.settingscard}
        onPress={handleSettings}>
        <View style={Drawercomponent_style.iconview}>
          <Settings_icon height={24} width={24} color="red" />
        </View>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Drawercomponent_style.settingscard}>
        <View style={Drawercomponent_style.iconview}>
          <CheckIn_Icon
            height={24}
            width={24}
            color="skyblue"
            secondcolor="skyblue"
          />
        </View>
        <Text>Check-Ins</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Drawercomponent_style.settingscard}>
        <View style={Drawercomponent_style.iconview}>
          <MyExpense_icon
            height={24}
            width={24}
            color="violet"
            secondColor="violet"
          />
        </View>
        <Text>My Expenses</Text>
      </TouchableOpacity>

      <View style={Drawercomponent_style.bottompart}>
        <View style={Drawercomponent_style.bottomsubcontent}>
          <TouchableOpacity
            style={Drawercomponent_style.logoutView}
            onPress={() => handleLogOut()}>
            <View style={Drawercomponent_style.logouticon}>
              <Logout_icon height={24} width={24} color="blue" />
            </View>
            <Text style={{fontWeight: '600'}}>Logout</Text>
          </TouchableOpacity>
          <View style={Drawercomponent_style.logoview}>
            <Logo_icon
              height={50}
              width={55}
              color="white"
              second_Color="blue"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Drawer_component;

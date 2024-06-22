import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Header_style from '../Stylesheet/Header_style';
import Menu_icon from '../Assets/Dashboard/SVG/Menu_icon';

const Header = ({onPress, ...props}) => {
  return (
    <View style={Header_style.mainview}>
      <TouchableOpacity
        style={{position: 'absolute', left: 30}}
        onPress={onPress}>
        <Menu_icon height={24} width={20} color="blue" />
      </TouchableOpacity>
      <View style={Header_style.Logopostion}>
        <Image
          source={require('../Assets/Login/Logo.png')}
          style={Header_style.Logo}
        />
      </View>
    </View>
  );
};

export default Header;

import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import GobackIcon from '../Assets/Settings/goback_icon';
import Setting_Style from '../Stylesheet/SettingsStyle';

const SettingsHeader = ({onPress, ...props}) => {
  return (
    <View style={Setting_Style.header}>
      <TouchableOpacity
        style={{position: 'absolute', left: 30}}
        onPress={onPress}>
        <GobackIcon height={24} width={20} color="blue" />
      </TouchableOpacity>
      <View style={Setting_Style.Settingtext}>
        <Text style={Setting_Style.font}>Settings</Text>
      </View>
    </View>
  );
};

export default SettingsHeader;

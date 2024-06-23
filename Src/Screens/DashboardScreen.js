import {
  View,
  ScrollView,
  Image,
  Button,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {Drawer} from 'react-native-drawer-layout';
import Dashboard_style from '../Stylesheet/DashboardStyle';
import Header from '../Utils/Header';
import Drawer_component from '../Utils/Drawer';
import CheckIn_Icon from '../Assets/Dashboard/SVG/checkinIcon';
import Checkout_Icon from '../Assets/Dashboard/SVG/checkoutIcon';
const DashboardScreen = ({navigation}) => {
  const [open, setOpen] = React.useState(false);

  let listData = [
    {
      title: 'Sayan Banerjee',
      description: 'Check In: 21st June 07.30 PM',
    },
    {
      title: 'Sajal bairagi',
      description: 'Check In: 21st June 07.30 PM',
    },
    {
      title: 'Subhadeep Samui',
      description: 'Check In: 21st June 07.30 PM',
    },
    {
      title: 'Nilanjan Ghosh',
      description: 'Check In: 21st June 07.30 PM',
    },
  ];
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Drawer_component navigation={navigation} />;
      }}>
      <Header onPress={() => setOpen(prevOpen => !prevOpen)} />
      <View style={Dashboard_style.middle}>
        <TouchableOpacity style={Dashboard_style.checkinContainer}>
          <Image
            source={require('../Assets/Dashboard/checkin.png')}
            style={{
              width: '90%',
              height: '100%',
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity style={Dashboard_style.travelExpenceContainer}>
          <Image
            source={require('../Assets/Dashboard/expense.png')}
            style={{
              width: '90%',
              height: '100%',
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={{left: 35, fontWeight: '600', fontSize: 16}}>
        Pending Check out
      </Text>
      <FlatList
        data={listData}
        style={Dashboard_style.checkinoutdetailsscroll}
        renderItem={({item}) => (
          <View style={Dashboard_style.card}>
            <View style={Dashboard_style.firstView}>
              <Text style={Dashboard_style.title}>{item?.title}</Text>
              <View style={Dashboard_style.detailsView}>
                <CheckIn_Icon
                  height={20}
                  width={20}
                  color="orange"
                  secondcolor="orange"
                />
                <Text style={Dashboard_style.details}>{item?.description}</Text>
              </View>
            </View>
            <View style={Dashboard_style.secondView}>
              <Checkout_Icon height={20} width={20} color="white" />
              <Text style={Dashboard_style.checkouttitle}>Check Out</Text>
            </View>
          </View>
        )}
      />
    </Drawer>
  );
};

export default DashboardScreen;

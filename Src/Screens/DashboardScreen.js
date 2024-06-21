import {View, Button, Text} from 'react-native';
import React from 'react';
import {Drawer} from 'react-native-drawer-layout';

const DashboardScreen = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}>
      <Button
        onPress={() => setOpen(prevOpen => !prevOpen)}
        title={`${open ? 'Close' : 'Open'} drawer`}
      />
    </Drawer>
  );
};

export default DashboardScreen;

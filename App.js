// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import { DrawerContent } from './screens/DrawerContent';
import HomeStackScreen from './screens/Home';
import InfoStackScreen from './screens/Info';
// import ModalScreen from './screens/Modal';



const Drawer = createDrawerNavigator();

// function LoginScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Login screen</Text>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <ModalScreen /> */}
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} drawerStyle={{ borderBottomRightRadius: 20, borderTopRightRadius: 20}} >
          <Drawer.Screen name="Home" component={HomeStackScreen}/>
          <Drawer.Screen name="InfoScreen" component={InfoStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style='light' backgroundColor='rgba(0, 56, 112, 1)' />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

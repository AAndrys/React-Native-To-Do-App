import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const InfoStack = createStackNavigator();

const InfoScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
};

const InfoStackScreen = ({ navigation }) => {
    return (
        <InfoStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#0059b3'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTitleAlign: 'center',
        }}>
            <InfoStack.Screen name="Home" component={InfoScreen} options={{
                title: 'Info',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={[{ marginLeft: 10 }]}>
                        <FontAwesomeIcon icon={faBars} color="white" size={30} />
                    </TouchableOpacity>
                )
            }} />
        </InfoStack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default InfoStackScreen;
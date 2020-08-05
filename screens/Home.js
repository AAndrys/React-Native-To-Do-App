import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Vibration } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import ModalScreen from './Modal';


const HomeStack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
            <View style={styles.container}>
                <ModalScreen modalVisible={modalVisible} closeModal={() => setModalVisible(false)} />
                <ScrollView style={styles.topContent}>
                    <Text>APPPPPPP</Text>
                </ScrollView>
                <View style={styles.bottomButton}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.4} onPress={() => {Vibration.vibrate(100), setModalVisible(true)}}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>ADD NEW TASK</Text>
                    </TouchableOpacity>
                </View>
                {/* <Button
                    onPress={() => navigation.navigate('InfoScreen')}
                    title="Go to InfoScreen"
                /> */}
            </View>

    );
};

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#0059b3',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTitleAlign: 'center',

        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                title: 'Home',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={[{ marginLeft: 10 }]}>
                        <FontAwesomeIcon icon={faBars} color="white" size={30} />
                    </TouchableOpacity>
                )
            }} />
            {/* <HomeStack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} /> */}
        </HomeStack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    topContent: {
        width: '100%',
        flex: 1,
    },
    bottomButton: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 125, 250, 1)',
    },
    buttonStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HomeStackScreen;
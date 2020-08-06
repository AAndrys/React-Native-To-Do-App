import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration, FlatList, TouchableNativeFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faJournalWhills } from '@fortawesome/free-solid-svg-icons';

import ModalScreen from './Modal';


const HomeStack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [itemList, setItemList] = useState([]);


    const addNewItem = (text) => {
        setItemList(currentItem => [
            ...currentItem,
            text
        ])
        console.log(itemList);
    }

    const renderItem = (item) => {
        return (
            <View style={styles.taskContainer}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#696969', true)}>
                    <View style={styles.taskStyle}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ color: 'black' }}>{item.item}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <ModalScreen modalVisible={modalVisible} closeModal={() => setModalVisible(false)} addNewTask={(text) => addNewItem(text)} />
                <View style={styles.topContent}>
                    <View style={styles.heading}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}>Your tasks</Text>
                    </View>
                    <View style={styles.mainContent}>
                        <FlatList 
                            data={itemList}
                            keyExtractor={(item, index) => item + index}
                            renderItem={renderItem}
                            contentContainerStyle={{ paddingBottom: 40 }}
                        />
                    </View>
                </View>
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
    },
    heading: {
        width: '100%',
        height: 60,
        backgroundColor: '#0059b3',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    mainContent: {
        width: '100%',
        height: '85%',
        // paddingBottom: 40,
        // alignItems: 'center'
    },
    taskContainer: {
        width: '91%',
        minHeight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8E8E8',
        // paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 19,
    },
    taskStyle: {
        width: '100%',
        minHeight: 80,
        justifyContent: 'center',
        // backgroundColor: '#E8E8E8',
        // paddingHorizontal: 20,
        // borderRadius: 20,
        // marginTop: 20,
        // marginLeft: 19,
    }
});

export default HomeStackScreen;
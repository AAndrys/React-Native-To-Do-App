import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity} from 'react-native';


const ModalScreen = (props) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <Modal visible={props.modalVisible} animationType='fade'>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
            }}>
                <View style={styles.container}>
                    <Text>Write your task under!</Text>
                    <TextInput maxLength={40} style={styles.inputStyle} value={inputValue} onChangeText={(text) => setInputValue(text)} placeholder='Write something to do!'/>
                    <View style={styles.bottomButton}>
                        <TouchableOpacity style={styles.buttonStyleNewTask} activeOpacity={.4} onPress={() => { props.addNewTask(inputValue), setInputValue('')}}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>ADD NEW TASK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyleClose} activeOpacity={.4} onPress={props.closeModal}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Button title="Add new task" color='#0059b3' marginBottom={10} />
                    <Button title="Close" onPress={props.closeModal} color='red' /> */}
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        width: '50%',
        borderBottomWidth: 2,
        borderColor: 'rgba(0, 125, 250, 1)',
        textAlign: 'center',
        marginBottom: 10,
        padding: 5,
        // backgroundColor: 'gray'
    },
    bottomButton: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 125, 250, 1)',
    },
    buttonStyleNewTask: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0059b3',
    },
    buttonStyleClose: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
});

export default ModalScreen;
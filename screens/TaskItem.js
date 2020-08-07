import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration, FlatList, TouchableNativeFeedback, Alert } from 'react-native';

const taskItemScreen = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <Text>{route.params.itemData.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
})

export default taskItemScreen;
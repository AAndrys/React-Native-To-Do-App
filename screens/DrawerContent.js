import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export const DrawerContent = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.circle}>
                    <FontAwesomeIcon icon={faUser} color="black" size={50} />
                </View>
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.options} activeOpacity={.7} onPress={() => props.navigation.navigate('Home')}>
                    <FontAwesomeIcon icon={faHome} color="white" size={25} style={{ flex: 3 }} />
                    <Text style={[styles.textStyle, { flex: 1 } ]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.options} activeOpacity={.7} onPress={() => props.navigation.navigate('InfoScreen')}>
                    <FontAwesomeIcon icon={faInfo} color="white" size={25} style={{ flex: 3 }} />
                    <Text style={[styles.textStyle, { flex: 1 }]}>Info</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signIn}>
                <TouchableOpacity style={styles.optionsSignIn} activeOpacity={.7}>
                    <FontAwesomeIcon icon={faSignInAlt} color="white" size={25} style={{ flex: 3 }} />
                    <Text style={[styles.textStyle, { flex: 1 }]}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0059b3',
        // paddingTop: 20,
        alignItems: 'center',
        // justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative',
    },
    topView: {
        width: '100%',
        height: 140,
        // marginBottom: 20,
        backgroundColor: '#0073e6',
        paddingTop: 20,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    options: {
        height: 40,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#0080ff',
        // borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    bottomView: {
        width: '100%',
        // height: '70%',
        paddingTop: 20,
        // paddingHorizontal: 20,
    },
    signIn: {
        width: '100%',
        height: 50,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        borderBottomRightRadius: 20,
        backgroundColor: '#0073e6',
    },
    optionsSignIn: {
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#0080ff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    }
})
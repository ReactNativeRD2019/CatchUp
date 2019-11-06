import React from 'react';
import { View, TextInput, StyleSheet, Alert, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';

const LoginView = (props) => {
    var userName = "";
    var userPassword = "";

    const usernameInputhandler = (usernameText) => {
        console.log(userText)
        userName = usernameText;
    };
    const userPasswordInputhandler = (userpasswordText) => {
        console.log(userpasswordText)
        userPassword = userpasswordText;
    };
    const loginActionHandler = () => {
        Alert.alert(
            'Login Tapped'
        )
    };

    const signUpActionHandler = () => {
        Alert.alert(
            'Signup Tapped'
        )
    };

    const forgotPasswordActionHandler = () => {
        Alert.alert(
            'forgotpassword Tapped'
        )
    };

    return (
        <View style={{ backgroundColor: 'transparent', flex: 1 }}>
            <Image source={require('../Assets/CatchUpBackground.png')} style={styles.backgroundImage} />
            <View style={styles.loginView}>
                <TextInput placeholder='Email' style={styles.userInputView} onChangeText={usernameInputhandler} value={userPassword}></TextInput>
                <TextInput placeholder='Password' secureTextEntry = 'true' style={styles.passwordInputView} onChangeText={userPasswordInputhandler} value={userName} ></TextInput>
                <Button buttonStyle={styles.loginButton} title='Login' onPress={loginActionHandler} />
                <View style={styles.bottomView}>
                    <Button buttonStyle={styles.bottomButton} title='Signup' onPress={signUpActionHandler} />
                    <Button buttonStyle={styles.bottomButton} title='Forgot Password' onPress={forgotPasswordActionHandler} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginView: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    userInputView: {
        margin: 10,
        marginBottom: 5,
        padding: 10,
        height: 44,
        width: '80%',
        borderRadius: 20,
        backgroundColor: 'white'
    },
    passwordInputView: {
        padding: 10,
        height: 44,
        width: '80%',
        borderRadius: 20,
        backgroundColor: 'white'
    },
    loginButton: {
        backgroundColor: '#a34277',
        margin: 15,
        height: 40,
        width: Dimensions.get('window').width / 3,
        justifyContent: 'center',
        borderRadius: 20,
        shadowOffset: { width: 1, height: 1, },
        shadowColor: 'black',
        shadowOpacity: 1,
    },

    bottomButton: { backgroundColor: 'transparent', width: Dimensions.get('window').width / 2, height: 60 },
    bottomView: {
        width: '100%',
        height: 60,
        backgroundColor: '#a34277',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
});

export default LoginView;
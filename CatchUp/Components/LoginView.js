import React from 'react';
import { View, TextInput, StyleSheet, Alert, Dimensions, Image, SectionStyle } from 'react-native';
import { Button, Text } from 'react-native-elements';
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
        'Signup Tapped'
        Alert.alert(
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
                <Image source={require('../Assets/CatchUpLogo.png')} style={styles.appLogo} />
                <Text style={styles.appLogoTitle} >Find your Heart</Text>
                <View style={styles.SectionStyle}>
                    <Image source={require('../Assets/email.png')} style={styles.ImageStyle} />
                    <TextInput style={styles.textInput} placeholder="Email" underlineColorAndroid="transparent" />
                </View>
                <View style={styles.SectionStyle}>
                    <Image source={require('../Assets/password.png')} style={styles.ImageStyle} />
                    <TextInput style={styles.textInput} placeholder="Password" underlineColorAndroid="transparent" />
                </View>
                <Button buttonStyle= {styles.loginButton}  titleStyle={styles.buttonTitle} title='Login' onPress={loginActionHandler} />
                <View style={styles.bottomView}>
                    <Button buttonStyle={styles.bottomButton} titleStyle={styles.buttonTitle} title='Sign up'  onPress={signUpActionHandler} />
                    <Button buttonStyle={styles.bottomButton} titleStyle={styles.buttonTitle} title='Forgot Password' onPress={forgotPasswordActionHandler} />
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
        fontFamily: 'KohinoorTelugu-Regular',
        fontSize: 14
    },

    textInput:{
     flex: 1,
     fontSize: 13,
     fontFamily: 'KohinoorTelugu-Medium'
    },

    buttonTitle: {
        color: "white",
        fontSize: 14,
        fontFamily: 'KohinoorTelugu-Medium'
    },
    bottomButton: {
        backgroundColor: 'transparent', width: Dimensions.get('window').width / 2, height: 60, fontFamily: 'KohinoorTelugu-Medium',
        fontSize: 16
    },
    bottomView: {
        width: '100%',
        height: 60,
        backgroundColor: '#a64276',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },

    appLogo: {
        bottom: 150,
        width: 100,
        height: 100,
        borderRadius: 10
    },

    appLogoTitle: { color: 'white', fontFamily: 'KohinoorTelugu-Medium', fontSize: 13, textAlign: 'center', bottom: 147 },
    SectionStyle: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 45,
        borderRadius: 20,
        margin: 2,
        padding: 10
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
});

export default LoginView;
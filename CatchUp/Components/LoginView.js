import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const LoginView = (props) => {
    var  userName = "";
    var  userPassword = "";

    const usernameInputhandler = (usernameText) => {
        console.log(userText)
        userName = usernameText;
    };
    const userPasswordInputhandler = (userpasswordText) => {
        console.log(userpasswordText)
        userPassword = userpasswordText;
    };
    const onLoginActionHandler = () => {

    }
 return(
     <View style = {styles.loginView}>
       <TextInput placeholder = 'Enter user name' style ={styles.userInputView} onChangeText ={usernameInputhandler} value = {userPassword}></TextInput>
       <TextInput placeholder = 'Enter password' style ={styles.passwordInputView} onChangeText = {userPasswordInputhandler}  value = {userName} ></TextInput>
       <Button title = 'Login' style ={styles.loginButton} onPress = {onLoginActionHandler} />
     </View>
 );
}

const styles = StyleSheet.create({
    loginView: {
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'column'
        
    },
    userInputView: {
        padding: 10,
        height: 44,
        width:'80%',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:4
    },
    passwordInputView: {
        padding: 10,
        height: 44,
        width:'80%',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:4
    },
    loginButton: {
        backgroundColor:'blue',
        padding: 10,
        width:'80%',
        borderRadius: 8,
    
    }
})


export default LoginView;
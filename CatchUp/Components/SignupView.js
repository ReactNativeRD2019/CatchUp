import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const SignupView = () => {
    return(
        <View style = {styles.rootView}>
            <Text style ={styles.text}>Welcome</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        rootView: {
            flex:1,
            backgroundColor:'red',
            justifyContent: 'center',
            alignItems: 'center' 
        },
        text: {
            fontSize:20,
            color:'white'
        }
    }
);

export default SignupView;
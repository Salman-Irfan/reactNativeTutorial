import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';


const LoginScreen = (props : any) => {
    // i want to send this name through props,
    // and access this props data in HomeScreen
    let name = "salman"
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button
                title='Go to home page'
                onPress={() => props.navigation.navigate('Main', { screen: 'Home', params: { name: name } })}
            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});

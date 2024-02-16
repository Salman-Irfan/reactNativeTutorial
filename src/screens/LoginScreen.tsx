import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';


const LoginScreen = (props : any) => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button
                title='Go to home page'
                onPress={() => props.navigation.navigate('Main')}
            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});

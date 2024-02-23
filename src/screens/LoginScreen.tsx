import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice'
import envConfig from '../../config';

const LoginScreen = (props: any) => {
    console.log(envConfig.BASE_URL)
    
    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()

    let name = "salman"
    return (
        <>
            <View>
                <Text>LoginScreen</Text>
                <Button
                    title='Go to home page'
                    onPress={() => props.navigation.navigate('Main', { screen: 'Home', params: { name: name } })}
                />
            </View>
            {/* redux */}
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button title="Increment value" onPress={() => dispatch(increment())} />
                    <Text style={{color:'red'}} >{count}</Text>
                    <Button title="Decrement value" onPress={() => dispatch(decrement())} />
                </View>
            </View>
        </>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});

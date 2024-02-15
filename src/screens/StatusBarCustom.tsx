import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusBarCustom = () => {
    return (
        <View>
            <StatusBar
                backgroundColor={'orange'}
                barStyle={'dark-content'}
                hidden={true}
            />
            <Text style={{color:'black'}} >StatusBarCustom</Text>
        </View>
    )
}

export default StatusBarCustom

const styles = StyleSheet.create({})
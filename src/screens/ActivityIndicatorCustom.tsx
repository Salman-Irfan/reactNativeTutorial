import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

const ActivityIndicatorCustom = () => {
    return (
        <View>
            <ActivityIndicator 
                size={50}
                color='blue'
                animating={true}
            />
            <Text style={{color:'red'}} >Activity Indicator Custom</Text>
        </View>
    )
}

export default ActivityIndicatorCustom

const styles = StyleSheet.create({})
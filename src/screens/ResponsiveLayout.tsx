import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResponsiveLayout = () => {
    return (
        <View style={{flex:1, backgroundColor:'green'}} >
            <View style={{flex:1, backgroundColor:'red'}} ></View>
            <View style={{flex:1, backgroundColor:'yellow'}} ></View>
        </View>
    )
}

export default ResponsiveLayout

const styles = StyleSheet.create({})
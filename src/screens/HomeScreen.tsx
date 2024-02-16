import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = (props:any) => {
    console.log(props)
    console.log(props.route)
    console.log(props.route.params)
    console.log(props.route.params.name)
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
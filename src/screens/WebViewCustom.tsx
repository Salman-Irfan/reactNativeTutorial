import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const WebViewCustom = () => {
    return (
        <>
            <View>
                <Text style={{color:'black'}}>Web View</Text>
            </View>
            <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
        </>
    )
}

export default WebViewCustom

const styles = StyleSheet.create({})
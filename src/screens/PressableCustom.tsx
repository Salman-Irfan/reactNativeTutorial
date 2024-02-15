import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const PressableCustom = () => {
    return (
        <View>
            <Text style={{color:'black'}} >PressableCustom</Text>
            <Pressable
                onPressIn={()=>console.log('on press in')}
                onPress={()=>console.log('on press')}
                onLongPress={()=>console.log(`on long press`)}
                onPressOut={()=>console.log(`on press out`)}
            >
                <Text 
                    style={{
                        color:'red',
                        backgroundColor:'black'
                    }} 
                >
                        Pressable
                    </Text>
            </Pressable>
        </View>
    )
}

export default PressableCustom

const styles = StyleSheet.create({})
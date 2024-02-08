import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';

const ExampleComponent = () => {
    return (
        <>
            <ScrollView style={[styles.main]}>
                <View style={styles.container}>
                    <TouchableHighlight 
                        style={styles.buttonContainer} 
                        underlayColor="red" 
                        onPress={() => console.log('Button pressed')}
                    >
                        <Text style={styles.button}>Touchable Highlight Button</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
};

export default ExampleComponent;

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 20
    },
    button: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        shadowColor: 'yellow',
        elevation: 100
    }
});

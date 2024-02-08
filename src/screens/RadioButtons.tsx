import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';

const RadioButtons = () => {
    const [gender, setGender] = useState('');

    const handleGenderChange = (value: any) => {
        setGender(value);
        console.log('Selected gender:', value);
    };
    return (
        <>
            <ScrollView style={styles.container}>

                <View>
                    <Text style={styles.title}>RadioButtons</Text>
                </View>

                {/* radio buttons */}
                <View style={styles.radioButtonContainer}>
                    {/* male */}
                    <TouchableOpacity
                        onPress={() => handleGenderChange('male')}
                    >
                        <View style={styles.radioButton}>
                            <RadioButton
                                value="male"
                                status={gender === 'male' ? 'checked' : 'unchecked'}
                                onPress={() => handleGenderChange('male')}
                                color="#009688" // Customize the selected color
                            />
                            <Text style={styles.label}>Male</Text>
                        </View>
                    </TouchableOpacity>
                    {/* female */}
                    <TouchableOpacity
                        onPress={() => handleGenderChange('female')}
                    >
                        <View style={styles.radioButton}>
                            <RadioButton
                                value="female"
                                status={gender === 'female' ? 'checked' : 'unchecked'}
                                onPress={() => handleGenderChange('female')}
                                color="#009688" // Customize the selected color
                            />
                            <Text style={styles.label}>Female</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default RadioButtons

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30,
    },
    label: {
        marginLeft: 10,
        color: 'white',
    },
});
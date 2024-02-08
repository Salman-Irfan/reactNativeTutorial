import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import users from '../../services/data/users'

const FlatlistTutorial = () => {

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>List with FlatList Component</Text>
            {/* flat list */}
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.name}</Text>
                    );
                }}
            />
            <Text style={styles.text}>List with HorizontalFlatList Component</Text>
            {/* Wrap the horizontal FlatList in a View container */}
            <View style={styles.horizontalContainer}>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Text style={styles.item}>{item.name} </Text>
                        );
                    }}
                    horizontal={true} // Set horizontal prop to true
                />
            </View>

        </ScrollView>
    )
}

export default FlatlistTutorial

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000', // White background color
        padding: 20 // Add some padding for spacing
    },
    text: {
        color: '#ffffff',
    },
    item: {
        marginRight: 10,
        color: '#ffffff',
        backgroundColor: 'green',
        padding: 10,
        margin: 10
    },
    horizontalContainer: {
        flexDirection: 'row',
        overflow: 'scroll', // or 'hidden' based on your preference
        // backgroundColor: 'gray'
    }
})

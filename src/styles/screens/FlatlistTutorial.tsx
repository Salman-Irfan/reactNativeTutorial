import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import users from '../../services/data/users'

const FlatlistTutorial = () => {

    return (
        <>
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
                {/* grid */}
                <View style={styles.gridView}>
                    <Text style={styles.text}> List with Grid </Text>
                    {/* display users through map method */}
                    {users.map(user => (
                        <Text key={user.id} style={styles.item}>{user.name}</Text>
                    ))}
                    <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias id blanditiis eum adipisci repellendus, modi,</Text>

                </View>
            </ScrollView>
        </>
    )
}

export default FlatlistTutorial

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000', // black background color
        padding: 20, // Add some padding for spacing
        marginBottom: 10
    },
    text: {
        color: '#ffffff', // white
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
    },
    gridView: {
        marginBottom: 20, // Add margin at the bottom of the grid view
        borderWidth: 1, // Add border for the grid view
        borderColor: '#ffffff', // Set border color
        padding: 10, // Add padding for the grid view
        // grid
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
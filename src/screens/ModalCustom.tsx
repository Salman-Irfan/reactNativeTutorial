import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

const ModalCustom = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modal Custom</Text>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                //     setModalVisible(false);
                // }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{color:'black'}} >This is the modal content.</Text>
                        <Button title="Close Modal" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
});

export default ModalCustom;

import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export const StyledButton = ({children, onPress}) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B43104',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 18
    },
    buttonText: {
        color: 'white'
    }
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
        onPress = {handlePress}
        activeOpacity = {0.7}
        style = { [styles.container, containerStyles, isLoading ? opacity50 : ''] }
        disabled = {isLoading}
    >
        <Text
            style = { [styles.primaryText, textStyles] }
        >
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'darkgrey'
    },

    opacity50: {
        opacity: 0.5
    },

    primaryText: {
        color: 'grey',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../components'

const second = () => {
  return (
    <View>
      <Text>second</Text>
      <Button
        title = "TESTING"
        handlePress = {temp}
        containerStyles = {styles.testStyle}
        isLoading = {temp2}
      />
    </View>
  )
}

export default second

const styles = StyleSheet.create({
    testStyle: {
        borderBottomWidth: 2
    }
})
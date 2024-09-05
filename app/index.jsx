import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from '../components'

const index = () => {
  const buttonPress = () => {

  }

  const [isLoading, setIsLoading] = useState(false)

  return (
    <View>
      <Text style = { styles.text }>critterLOG</Text>
      <View style = { {flexDirection: 'row', justifyContent: 'center'} }>
        
        <Button
          title = "Button"
          handlePress = {buttonPress}
          containerStyles = {styles.testStyle}
          isLoading = {isLoading}
        />
        <Button
          title = "Button"
          handlePress = {buttonPress}
          containerStyles = {styles.testStyle}
          isLoading = {isLoading}
        />
        <Button
          title = "Button"
          handlePress = {buttonPress}
          containerStyles = {styles.testStyle}
          isLoading = {isLoading}
        />
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'
  },

  text: {
    textAlign: 'center',
    paddingTop: 25,
    fontWeight: 'bold'
  },
  
  testStyle: {
    marginTop: 14,
    width: 64,
    margin: 8
  }
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, SearchBar } from '../components'

const index = () => {
  const buttonPress = () => {

  }

  const [isLoading, setIsLoading] = useState(false)

  return (
    <View>
      <Text style = { [styles.text, styles.basic] }>critterLOG</Text>
      <SearchBar></SearchBar>
      <View style = { {flexDirection: 'row', justifyContent: 'center'} }>
        <Button
          title = "Button 1"
          handlePress = {buttonPress}
          containerStyles = {[styles.buttonContainer, styles.basic]}
          isLoading = {isLoading}
        />
        <Button
          title = "Button 2"
          handlePress = {buttonPress}
          containerStyles = {[styles.buttonContainer, styles.basic]}
          isLoading = {isLoading}
        />
        <Button
          title = "Button 3"
          handlePress = {buttonPress}
          containerStyles = {[styles.buttonContainer, styles.basic]}
          isLoading = {isLoading}
        />
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  basic: {
    padding: 8
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  
  buttonContainer: {
    marginTop: 14,
    margin: 8,

    width: 'auto'
  }
})
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.searchBar}>
            <TextInput
                style = {[styles.textInput, styles.searchBarItem]}
                placeholder = 'Type here to search!'
                placeholderTextColor={'#46538c'}
            />
            <Image
                style = {[styles.searchIcon]}
                source={{uri:'https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png'}}
            />
        </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#46538c',
        backgroundColor: '#c2cbf2'
    },
    searchBarItem: {
        height: 40
    },
    textInput: {
        color: '#46538c',
        fontWeight: 'bold',
        width: 275,
        paddingLeft: 10
    },
    searchIcon: {
        width: 25,
        height: 25,
        margin: 5,
        marginHorizontal: 10 
    }
})
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.container}>
      <TextInput />
      <TouchableOpacity><FontAwesome name='search' /></TouchableOpacity>
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
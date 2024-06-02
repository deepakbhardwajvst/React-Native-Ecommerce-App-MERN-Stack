import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Header = () => {
  const[searchText,setSearchText]= useState("")
  // function for search
  const searchHandler = ()=>{
    console.log(searchText)
    setSearchText("")
  }
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <Feather name="menu" style={styles.menuicon} />
        <TextInput
          style={styles.InputBox}
          value={searchText}
          placeholder="Iphone 14 max pro"
          onChangeText={(e) => {
            setSearchText(e);
          }}
        /> 
        <TouchableOpacity style={styles.searchBtn} onPress={searchHandler}>
          <FontAwesome name="search" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
  box: {
    // marginTop: 20,
    marginTop: 30,
    height: 60,
    // flex: 1,
    backgroundColor: "#23527c",
    // alignItems: "center",
    // justifyContent: "center",
    width:410
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
  InputBox: {
    // borderWidth: 1,
    width: "94%",
    position: "absolute",
    // left: 5,
    right: 5,
    height: 40,
    color: "black",
    backgroundColor: "white",
    paddingLeft: 15,
    fontSize: 16,
    borderRadius: 28,
  },
  searchBtn: {
    position: "absolute",
    left: "98%",
    // height
  },
  icon: {
    color: "black",
    fontSize: 18,
  },
  menuicon: {
    color: "white",
    fontSize: 25,
  },
});
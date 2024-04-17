import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <TextInput style={styles.InputBox}/>
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome name="search"  style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
  box: {
    marginTop: 15,
    height: 90,
    // flex: 1,
    backgroundColor: "#f0f5ff",
    // alignItems: "center",
    // justifyContent: "center",
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
    borderWidth: 0.8,
    width: "100%",
    position: "absolute",
    left: 15,
    height: 40,
    color: "black",
    backgroundColor: "white",
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  searchBtn: {
    position: "absolute",
    left: "95%",
    // height
  },
  icon: {
    color: "black",
    fontSize: 18,
  },
});
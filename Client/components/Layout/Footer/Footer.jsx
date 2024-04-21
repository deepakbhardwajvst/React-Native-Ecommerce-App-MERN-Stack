import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer}>
        <AntDesign style={styles.icon} name="home" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer}>
        <AntDesign style={styles.icon} name="bells" />
        <Text style={styles.iconText}>notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer}>
        <AntDesign style={styles.icon} name="user" />
        <Text style={styles.iconText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer}>
        <AntDesign style={[styles.icon]} name="shoppingcart" />
        <Text style={styles.iconText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer}>
        <AntDesign style={styles.icon} name="logout" />
        <Text style={styles.iconText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    color: "#000000",
  },
  iconText: {
    color: "#000000",
    fontSize: 10,
  },
  active: {
    color: "blue",
  },
});
export default Footer;

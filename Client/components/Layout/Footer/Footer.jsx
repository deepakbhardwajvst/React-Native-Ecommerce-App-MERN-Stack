import { useRoute,useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <AntDesign
          style={[styles.icon, route.name === "home" && styles.active]}
          name="home"
        />
        <Text style={[styles.iconText, route.name === "home" && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer}>
        <AntDesign
          style={[styles.icon, route.name === "notification" && styles.active]}
          name="bells"
        />
        <Text
          style={[
            styles.iconText,
            route.name === "notification" && styles.active,
          ]}
        >
          Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>{navigation.navigate("account")}}>
        <AntDesign
          style={[styles.icon, route.name === "account" && styles.active]}
          name="user"
        />
        <Text
          style={[styles.iconText, route.name === "account" && styles.active]}
        >
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => {
          navigation.navigate("cart");
        }}
      >
        <AntDesign
          style={[styles.icon, route.name === "Cart" && styles.active]}
          name="shoppingcart"
        />
        <Text style={[styles.iconText, route.name === "Cart" && styles.active]}>
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        <AntDesign
          style={[styles.icon, route.name === "logout" && styles.active]}
          name="logout"
        />
        <Text
          style={[styles.iconText, route.name === "logout" && styles.active]}
        >
          Logout
        </Text>
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
    fontSize: 12,
  },
  active: {
    color: "blue",
    fontWeight: "600",
  },
});
export default Footer;

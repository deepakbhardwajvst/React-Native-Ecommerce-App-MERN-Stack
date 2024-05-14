import {
  View,
  Text,
  StyleSheet,
  //   ScrollView,
  //   TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { CartData } from "../../data/CartData";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <Layout>
      <View>
        <Text style={styles.heading}>
          {cartItems?.length > 0
            ? `You Have ${cartItems?.length} Item Left In Your Cart`
            : "OOPS Your Cart Is EMPTY !"}
        </Text>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "#000000",
    width: "90%",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default Cart;

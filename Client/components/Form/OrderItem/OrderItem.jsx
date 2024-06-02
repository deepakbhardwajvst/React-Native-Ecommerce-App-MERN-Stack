import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <View style={styles.flex}>
          <Text style={styles.label}>Order ID:</Text>
          <Text style={styles.value}>{order._id}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{order.date}</Text>
        </View>
      </View>
      <Text style={styles.productName}>
        Product name: {order.productInfo.name}
      </Text>
      <Text style={styles.text}>Price: ${order.productInfo.price}</Text>
      <Text style={styles.text}>Quantity: {order.productInfo.qty}</Text>
      <Text style={styles.text}>Total Amount: ${order.totalAmount}</Text>
      <Text style={[styles.text, styles.status]}>
        Order Status: {order.status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  orderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 5,
    marginBottom: 10,
  },

  flex: {
    display:"flex",
    flexDirection:"row",
    gap:10,
  },
  label: {
    fontWeight: "600",
    color: "#333",
  },
  value: {
    color: "#666",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  text: {
    color: "#555",
    marginBottom: 5,
  },
  status: {
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 5,
    fontWeight: "bold",
    color: "#333",
  },
});

export default OrderItem;

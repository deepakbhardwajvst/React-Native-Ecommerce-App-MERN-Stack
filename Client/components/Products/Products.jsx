import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from "react";
import ProductsCard from "./ProductsCard";
import { ProductsData } from "../../data/ProductsData.js";

const Products = () => {
  return (
    <>
    <View horizontal={true}  style={styles.card}>
      {/* <View style={styles.text}><Text>Products</Text></View> */}
      {ProductsData.map((p) => (
        <ProductsCard key={p._id} p={p} />
      ))}
    </View></>
  );
};

export default Products;


const styles = StyleSheet.create({
  card: {
    display: "flex",
    // justifyContent:"space-between",
    flexDirection: "row",
    // gap: 5,
    // flexWrap: "wrap",
    // flexGrow:0,
    // flexShrink:0,
    // marginTop:20,
  },
  text:{
    display:"flex"

  },
});
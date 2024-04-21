import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from "react";
import ProductsCard from "./ProductsCard";
import { ProductsData } from "../../data/ProductsData.js";

const Products = () => {
  return (
    <>
    <View  style={styles.card}>
      {ProductsData.map((p) => (
        <ProductsCard key={p._id} p={p} />
      ))}
    </View></>
  );
};

export default Products;


const styles = StyleSheet.create({
  card: {
   
    display:"flex",
    // justifyContent:"space-between",
    flexDirection:"row",
    gap:10,
    flexWrap:"wrap",
    marginTop:20,

  },
});
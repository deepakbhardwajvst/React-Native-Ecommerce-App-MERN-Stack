import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Categories from "../../components/Categories/Categories";
import Banner from "./../../components/Banner/Banner";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <Layout>
      <Categories />
   
      <Banner  /> 
      {/* <Banner  />  */}
    
      {/* <View style={styles.container}>
        <Text>Products</Text>
      </View > */}
   
      {/* <Products  />  */}
      <Products  /> 
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
marginTop:20,
marginBottom:20,
  },
  text: {
    color: "#fff",
  },
});

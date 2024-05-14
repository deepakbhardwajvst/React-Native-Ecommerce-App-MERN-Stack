import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Banner/Banner"
import Products from "../../components/Products/Products";
import Header from "./../../components/Layout/Header/Header";

const Home = () => {
  return (
    <Layout>
      {/* <View style={styles.container}> */}
        {/* <Header /> */}
    
      {/* </View> */}
      <Categories />
      {/* <Categories /> */}
      {/* <Categories /> */}

      <Banner />
      <Banner  /> 

      <Products  /> 
      {/* <Products /> */}
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  // container: {
  // marginRight:33,
  // width:"full",
  // display:"flex",
  // flex:1,
  // },
  // text: {
  //   color: "#fff",
  // },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Categories from "../../components/Categories/Categories";
import Banner from "./../../components/Banner/Banner";

const Home = () => {
  return (
    <Layout>
      <Categories />
      <Banner />
      <View>
        <Text>Homefda</Text>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <View style={styles}>
        <Text>Home</Text>
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

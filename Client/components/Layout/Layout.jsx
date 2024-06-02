import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { StatusBar } from 'expo-status-bar';

const Layout = ({children}) => {
  return (
    <>
      <StatusBar />
     {/* <Header /> */}
     
      <View>{children}</View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
} 

export default Layout;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});
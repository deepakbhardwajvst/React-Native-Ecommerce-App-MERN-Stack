import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { StatusBar } from 'expo-status-bar';

const Layout = ({children}) => {
  return (
    <>
    <StatusBar />
    <Header />
      <Text>{children}</Text>
      {/* <Footer /> */}
    </>
  )
} 

export default Layout

const styles = StyleSheet.create({})
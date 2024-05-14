import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Cart from "./screens/Cart/Cart";
import Checkout from "./screens/Checkout/Checkout";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//  10th
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#fff",
//   },
// });

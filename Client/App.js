import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Cart from "./screens/Cart/Cart";
import Checkout from "./screens/Checkout/Checkout";
import Payments from "./screens/Payments/Payments";
import Login from './screens/Auth/Login/Login';
import Register from "./screens/Auth/Register/Register";
import Account from "./screens/Account/Account";
import Notifications from './screens/Account/Notification/Notifications';
import Profile from "./screens/Account/Profile/Profile";
import MyOrders from "./screens/Account/MyOrders/MyOrders";

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
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="myorders"
          component={MyOrders}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="payment" component={Payments} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="notifications" component={Notifications} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//  13th video watch
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

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ProductsData } from "../../data/ProductsData";
import Layout from "../../components/Layout/Layout";

const ProductDetails = ({ route }) => {
  const { params } = route;
  const [pDetails, setPDetails] = useState(null);
  const [qty, setQty] = useState(1);
// console.log(pDetails)
  useEffect(() => {
    if (params?._id) {
      const product = ProductsData.find((p) => p._id === params._id);
      if (product) {
        setPDetails(product);
      } else {
        // Handle case where product is not found
        Alert.alert("Error", "Product not found");
      }
    } else {
      // Handle case where _id is missing in route params
      Alert.alert("Error", "Product ID missing in route params");
    }
  }, [params]);

  const handleAddQty = () => {
    if (qty < 10) {
      setQty((prevQty) => prevQty + 1);
    } else {
      Alert.alert("Limit Exceeded", "You cannot add more than 10 quantity");
    }
  };

  const handleRemoveQty = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };
  // console.log("Image URL:", pDetails?.imageUrl);

  return (
    <Layout>
      {pDetails && (
        <View>
          <Image style={styles?.image}  source={{ uri: pDetails?.imageUrl }} />
          <View style={styles?.container}>
            <Text style={styles?.title}>{pDetails?.name}</Text>
            <Text style={styles?.price}>Price: {pDetails?.price} $</Text>
            <Text style={styles?.description}>
              Description: {pDetails?.description}
            </Text>
            <Text style={styles?.quantity}>Quantity: {pDetails?.quantity}</Text>
            <View style={styles?.qtyContainer}>
              <TouchableOpacity
                style={styles?.qtyButton}
                onPress={handleRemoveQty}
              >
                <Text style={styles?.qtyButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles?.qtyText}>{qty}</Text>
              <TouchableOpacity
                style={styles?.qtyButton}
                onPress={handleAddQty}
              >
                <Text style={styles?.qtyButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[
                styles?.button,
                { backgroundColor: pDetails?.quantity > 0 ? "#000" : "gray" },
              ]}
              onPress={() => alert(`${qty} items added to cart`)}
              disabled={pDetails?.quantity <= 0}
            >
              <Text style={styles?.buttonText}>
                {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    width:"100%"
  },
  quantity: {
    fontSize: 16,
    marginBottom: 10,
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  qtyButton: {
    backgroundColor: "lightgray",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  qtyButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  qtyText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProductDetails;

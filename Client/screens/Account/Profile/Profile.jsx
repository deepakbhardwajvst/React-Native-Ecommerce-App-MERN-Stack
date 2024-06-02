import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { userData } from './../../../data/userData';
import Layout from './../../../components/Layout/Layout';
import InputBox from './../../../components/Form/InputBox/InputBox';

const Profile = ({ navigation }) => {
  //state
  const [email, setEamil] = useState(userData.email);
  const [profilePic, setProfilePic] = useState(userData.profilePic);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  //   update profile
  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields");
    }
    alert("profile update Successfully");
    navigation.navigate("account");
  };
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: profilePic }} />
            <Pressable onPress={() => alert("profile dailogbox")}>
              <Text style={{ color: "red" }}>update your profile pic</Text>
            </Pressable>
          </View>
          <InputBox
            value={name}
            setValue={setName}
            placeholder={"Full Name"}
            autoComplete={"name"}
          />
          <InputBox
            value={contact}
            setValue={setContact}
            placeholder={"Phone number"}
            autoComplete={"tel"}
          />
          <InputBox
            value={email}
            setValue={setEamil}
            placeholder={"Email ID"}
            autoComplete={"email"}
          />
          <InputBox
            value={password}
            setValue={setPassword}
            placeholder={"password"}
            autoComplete={"password"}
            secureTextEntry={true}
          />
          <InputBox
            value={address}
            setValue={setAddress}
            placeholder={"House No., area, Colony"}
            autoComplete={"address-line1"}
          />
          <InputBox
            value={city}
            setValue={setCity}
            placeholder={"City Name"}
            autoComplete={"country"}
          />

          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>UPDATE PROFILE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
     
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  btnUpdate: {
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    justifyContent: "center",
    marginTop: 10,
  },
  btnUpdateText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});
export default Profile;

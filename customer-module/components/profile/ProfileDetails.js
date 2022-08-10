import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import styles, { primaryColor } from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper.js";
import CustomButton from "../common/CustomButtom.js";

const ProfileDetails = ({ navigation }) => {

  const handleEdit = () => {
    navigation.navigate("Edit Profile");
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out sucessful
        navigation.replace("login");
      })
      .catch((error) => {
        // An error happened
        alert(error.message);
      });
  };

  return (
    <>
      <View style={profileStyles.imageContainer}>
        <Image
          style={profileStyles.image}
          source={require("../../assets/images/profile-1.jpg")}
        />
        <Text style={profileStyles.name}>Average Joe</Text>
      </View>
      <CenterWrapper>
        <View style={profileStyles.propertyContainer}>
          <MaterialIcons name="email" size={24} color="black" />
          <View style={profileStyles.property}>
            <Text style={profileStyles.label}>Email</Text>
            <Text style={profileStyles.field}>{auth.currentUser.email}</Text>
          </View>
        </View>
        <View style={profileStyles.propertyContainer}>
          <Ionicons name="key" size={24} color="black" />
          <View style={profileStyles.property}>
            <Text style={profileStyles.label}>Password</Text>
            <Text style={profileStyles.field}>******</Text>
          </View>
        </View>
        <View style={[profileStyles.propertyContainer, {marginBottom: 15}]}>
          <Entypo name="phone" size={24} color="black" />
          <View style={profileStyles.property}>
            <Text style={profileStyles.label}>Mobile Number</Text>
            <Text style={profileStyles.field}>60123456789</Text>
          </View>
        </View>
        <CustomButton 
          callback={handleEdit}
          content={"Edit"}
          cstyle={styles.button}
        />
        <CustomButton
          callback={handleSignOut}
          content={"Sign Out"}
          cstyle={styles.buttonSecondary}
        />
      </CenterWrapper>
    </>
  );
};

const profileStyles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
    backgroundColor: `${primaryColor}`,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  propertyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  property: {
    marginLeft: 10,
  },
  label: {
    // fontSize: 18,
    // fontWeight: "bold",
  },
  field: {
    // fontSize: 18,
    // fontWeight: "bold",
  },
});

export default ProfileDetails;
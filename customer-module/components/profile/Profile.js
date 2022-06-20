import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import styles from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper.js";
import CustomButton from "../common/CustomButtom.js";

const Profile = ({navigation}) => {
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
    <CenterWrapper>
      <View style={profileStyles.imageContainer}>
        <Image
          style={profileStyles.image}
          source={require("../../assets/images/profile-1.jpg")}
        />
      </View>
      <Text style={profileStyles.name}>Average Joe</Text>
      <Text style={profileStyles.label}>Email</Text>
      <Text style={profileStyles.field}>joe@mail.com</Text>
      <Text style={profileStyles.label}>Password</Text>
      <Text style={profileStyles.field}>******</Text>
      <Text style={profileStyles.label}>Mobile Number</Text>
      <Text style={profileStyles.field}>60123456789</Text>
      <CustomButton
        callback={handleSignOut}
        content={"Sign Out"}
        cstyle={styles.buttonSecondary}
      />
    </CenterWrapper>
  );
};

const profileStyles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  label: {
    // fontSize: 18,
    // fontWeight: "bold",
    marginTop: 10,
  },
  field: {
    // fontSize: 18,
    fontWeight: "bold",
  },
});

export default Profile;

const data = {
  profile: [
    {
      name: "Average Joe",
      email: "joe@mail.com",
      mobileNumber: "0123456789",
    },
  ],
};

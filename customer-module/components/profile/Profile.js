import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CenterWrapper from "../common/CenterWrapper";

const Profile = () => {
  return (
    <CenterWrapper>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/profile-1.jpg")}
        />
      </View>
      <Text style={styles.name}>Average Joe</Text>
      <Text style={styles.label}>Email</Text>
      <Text style={styles.field}>joe@mail.com</Text>
      <Text style={styles.label}>Password</Text>
      <Text style={styles.field}>******</Text>
      <Text style={styles.label}>Mobile Number</Text>
      <Text style={styles.field}>60123456789</Text>
    </CenterWrapper>
  );
};

const styles = StyleSheet.create({
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

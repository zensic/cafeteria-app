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

      <Text style={styles.label}>Name</Text>
      <Text style={styles.field}>John</Text>
      <Text style={styles.label}>Email</Text>
      <Text style={styles.field}>john123@mail.com</Text>
      <Text style={styles.label}>Password</Text>
      <Text style={styles.field}>******</Text>
      <Text style={styles.label}>Mobile Number</Text>
      <Text style={styles.field}>016-88667799</Text>
    </CenterWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  label: {
    // fontSize: 18,
    // fontWeight: "bold",
    marginTop: 40,
  },
  field: {
    fontSize: 18,
    fontWeight: "bold",
  }
});

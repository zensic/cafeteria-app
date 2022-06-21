import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import styles, {primaryColor} from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper.js";
import CustomButton from "../common/CustomButtom.js";
import Hr from "../common/Hr.js";

const Profile = ({ navigation }) => {
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
        <View style={profileStyles.nameContainer}>
          <Text style={profileStyles.name}>Average Joe</Text>
          <Text style={profileStyles.field}>joe@mail.com</Text>
        </View>
      </View>
      <Hr />
      <View style={profileStyles.propertyContainer}>
        <FontAwesome5 name="key" size={24} color="black" />
        <View style={profileStyles.property}>
          <Text style={profileStyles.label}>Password</Text>
          <Text style={profileStyles.field}>******</Text>
        </View>
      </View>
      <View style={profileStyles.propertyContainer}>
        <Entypo name="phone" size={24} color="black" />
        <View style={profileStyles.property}>
          <Text style={profileStyles.label}>Mobile Number</Text>
          <Text style={profileStyles.field}>60123456789</Text>
        </View>
      </View>
      <CustomButton
        
      />
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
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  nameContainer: {
    marginLeft: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: `${primaryColor}`,
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

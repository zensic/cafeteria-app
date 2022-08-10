import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { signOut } from "firebase/auth";

import { auth, fbGetDownloadURL, fbGetVendorDetails } from "../../firebase";
import styles, { primaryColor } from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";

const ProfileDetails = ({ navigation }) => {
  const [imagePath, setImagePath] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const isFocused = navigation.isFocused();

  const handleEdit = () => {
    navigation.navigate("Edit Details");
  };

  const handleOpeningHours = () => {};

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

  useEffect(() => {
    fbGetVendorDetails(setImageUrl, setName, setDescription, setLocation);
  }, [isFocused]);

  useEffect(() => {
    if (imageUrl != "") {
      fbGetDownloadURL(imageUrl, setImagePath);
    }
  }, [imageUrl]);

  return (
    <View>
      <Image
        style={styles.foodBannerImage}
        source={
          !imagePath || imagePath == ""
            ? require("../../assets/images/no-image.jpg")
            : { uri: imagePath }
        }
      />
      <CenterWrapper>
        <Text style={profileStyle.vendorName}>{name}</Text>
        <View style={profileStyle.vendorField}>
          <Entypo
            name="location-pin"
            size={24}
            color={primaryColor}
            style={profileStyle.vendorFieldIcon}
          />
          <Text>{location}</Text>
        </View>
        <View style={profileStyle.vendorField}>
          <Entypo
            name="list"
            size={24}
            color={primaryColor}
            style={profileStyle.vendorFieldIcon}
          />
          <Text>{description}</Text>
        </View>
        <View style={profileStyle.vendorField}>
          <FontAwesome5
            name="clock"
            size={24}
            color={primaryColor}
            style={profileStyle.vendorFieldIcon}
          />
          <View>
            <Text>Opening times</Text>
            <Text style={{ marginTop: 5 }}>08:30 - 23:00</Text>
          </View>
        </View>
        <CustomButton
          callback={handleEdit}
          content={"Edit Details"}
          cstyle={styles.button}
        />
        {/* <CustomButton
          callback={handleOpeningHours}
          content={"Edit Opening Times"}
          cstyle={styles.button}
        /> */}
        <CustomButton
          callback={handleSignOut}
          content={"Sign Out"}
          cstyle={styles.buttonSecondary}
        />
      </CenterWrapper>
    </View>
  );
};

const profileStyle = StyleSheet.create({
  vendorName: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  vendorField: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  vendorFieldIcon: { marginRight: 10 },
});

export default ProfileDetails;

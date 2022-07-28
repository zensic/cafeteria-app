import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

import styles, { primaryColor } from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";

const ProfileDetails = ({ navigation }) => {
  const handleEdit = () => {
    navigation.navigate("Edit Details");
  };

  const handleOpeningHours = () => {

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
    <View>
      <Image
        style={styles.foodBannerImage}
        source={require("../../assets/images/upload-food.jpg")}
      />
      <CenterWrapper>
        <Text style={profileStyle.vendorName}>ABC Stall</Text>
        <View style={profileStyle.vendorField}>
          <Entypo
            name="location-pin"
            size={24}
            color={primaryColor}
            style={profileStyle.vendorFieldIcon}
          />
          <Text>123, Jalan Rock, 93300 Kuching, Sarawak</Text>
        </View>
        <View style={profileStyle.vendorField}>
          <Entypo
            name="list"
            size={24}
            color={primaryColor}
            style={profileStyle.vendorFieldIcon}
          />
          <Text>
            ABC stall sells a variety of chicken based dishes in the Indonesian
            style
          </Text>
        </View>
        <View style={profileStyle.vendorField}>
          <FontAwesome5
            name="clock"
            size={24}
            color={primaryColor}
            style={profileStyle.vendorFieldIcon}
          />
          <View>
            <Text style={{ marginTop: 5 }}>Opening times</Text>
            <Text style={{ marginTop: 5 }}>08:30 - 23:00</Text>
          </View>
        </View>
        <CustomButton
          callback={handleEdit}
          content={"Edit Details"}
          cstyle={styles.button}
        />
        <CustomButton
          callback={handleOpeningHours}
          content={"Edit Opening Times"}
          cstyle={styles.button}
        />
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

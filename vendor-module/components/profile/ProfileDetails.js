import React from "react";
import { Image, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "../../styles/styles";
import { primaryColor } from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";

const ProfileDetails = ({ navigation }) => {
  const handleEdit = () => {
    navigation.navigate("Edit Details");
  };

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
        <Text style={{ fontWeight: "bold", fontSize: 18, marginVertical: 10 }}>ABC Stall</Text>
        <View style={{ flexDirection: "row", marginVertical: 10, alignItems: "center" }}>
          <Entypo
            name="location"
            size={24}
            color={primaryColor}
            style={{ marginRight: 10 }}
          />
          <Text style={{}}>123, Jalan Rock, 93300 Kuching, Sarawak</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10, alignItems: "center" }}>
          <FontAwesome5
            name="clock"
            size={24}
            color={primaryColor}
            style={{ marginRight: 10 }}
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
          callback={handleSignOut}
          content={"Sign Out"}
          cstyle={styles.buttonSecondary}
        />
      </CenterWrapper>
    </View>
  );
};

export default ProfileDetails;

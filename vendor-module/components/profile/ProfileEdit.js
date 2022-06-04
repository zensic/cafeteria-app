import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { useState } from "react";

import styles from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";
import Field from "../common/Field";

const ProfileEdit = ({navigation}) => {
  const [name, setName] = useState("ABC Stall");
  const [location, setLocation] = useState("123, Jalan Rock, 93300 Kuching, Sarawak");
  const [opening, setOpening] = useState("08:30 - 23:00");

  const handleConfirm = () => {};

  const handleCancel = () => {
    navigation.navigate("Shop Details");
  };

  return (
    <View>
      <Pressable>
        <ImageBackground
          style={styles.foodBannerImage}
          source={require("../../assets/images/upload-food.jpg")}
        >
          <Text style={styles.foodBannerImageText}>Upload New Store Image</Text>
        </ImageBackground>
      </Pressable>
      <CenterWrapper>
        <Field
          label={"Stall Name"}
          value={name}
          placeholder={"Enter new stall name here"}
          callback={setName}
        />
        <Field
          label={"Location"}
          value={location}
          placeholder={"Enter new stall location here"}
          callback={setLocation}
        />
        <Field
          label={"Opening Hours"}
          value={opening}
          placeholder={"Enter new store name here"}
          callback={setOpening}
        />

        <CustomButton
          callback={handleConfirm}
          content={"Confirm"}
          cstyle={[styles.button, {marginTop: 20}]}
        />
        <CustomButton
          callback={handleCancel}
          content={"Cancel"}
          cstyle={styles.buttonSecondary}
        />
      </CenterWrapper>
    </View>
  );
};

export default ProfileEdit;

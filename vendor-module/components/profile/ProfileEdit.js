import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";
import Field from "../common/Field";
import { fbGetVendorDetails, fbUpdateVendorDetails } from "../../firebase";

const ProfileEdit = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleConfirm = async () => {
    await fbUpdateVendorDetails(name, description, location);

    navigation.navigate("Shop Details");
  };

  const handleCancel = () => {
    navigation.navigate("Shop Details");
  };

  useEffect(() => {
    fbGetVendorDetails(setName, setDescription, setLocation);
  }, []);

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
          label={"Vendor Name"}
          value={name}
          placeholder={"Enter your new business's name here"}
          callback={setName}
        />
        <Field
          label={"Description"}
          value={description}
          placeholder={"Enter your new business's description here"}
          callback={setDescription}
        />
        <Field
          label={"Location"}
          value={location}
          placeholder={"Enter you new business location here"}
          callback={setLocation}
        />
        <CustomButton
          callback={handleConfirm}
          content={"Confirm"}
          cstyle={[styles.button, { marginTop: 20 }]}
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

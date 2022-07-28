import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import styles from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";
import Field from "../common/Field";
import {
  auth,
  fbGetDownloadURL,
  fbGetVendorDetails,
  fbUpdateVendorDetails,
  fbUploadImage,
} from "../../firebase";

const ProfileEdit = ({ navigation }) => {
  // Handles the uploaded file
  const [foodImage, setFoodImage] = useState("");
  // Handles the realtive image path
  const [imageUrl, setImageUrl] = useState("");
  // Handles the true image path
  const [imagePath, setImagePath] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fbGetVendorDetails(setImageUrl, setName, setDescription, setLocation);
  }, []);

  useEffect(() => {
    if (imageUrl != "") {
      fbGetDownloadURL(imageUrl, setImagePath);
    }
  }, [imageUrl])

  // Handles caching of uploaded image
  const handleUpload = async () => {
    // permission to access phone camera
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted == false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // opens file explorer to upload image
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    // if user cancels upload
    if (pickerResult.cancelled === true) {
      return;
    }

    setFoodImage(pickerResult);
    setImagePath(pickerResult.uri);
  };

  const handleConfirm = async () => {
    // Upload image to storage
    let imageName = imageUrl;

    // Check if image cache exists
    if (foodImage) {
      imageName = await fbUploadImage(
        foodImage,
        `images/${auth.currentUser.email}/profile`
      );
    }

    // Update vendor details
    await fbUpdateVendorDetails(
      `images/${auth.currentUser.email}/profile/${imageName}`,
      name,
      description,
      location
    );

    alert("You succesfully updated your profile!");

    navigation.navigate("Vendor Details");
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Pressable onPress={handleUpload}>
        <ImageBackground
          style={styles.foodBannerImage}
          source={
            !imagePath || imagePath == ""
              ? require("../../assets/images/no-image.jpg")
              : { uri: imagePath }
          }
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

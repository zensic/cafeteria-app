import {
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import CenterWrapper from "../common/CenterWrapper";

import { auth, db, storage } from "../../firebase";
import styles from "../../styles/styles";
import CustomButton from "../common/CustomButton";
import { Formik } from "formik";
import * as yup from "yup";
import * as ImagePicker from "expo-image-picker";
import uuid from "react-native-uuid";
import { doc, updateDoc } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";

const FoodEdit = ({ route, navigation }) => {
  const { foodId, foodName, foodPrice, foodUrl } = route.params;

  const [name, setName] = useState(foodName);
  const [price, setPrice] = useState(foodPrice);

  // New food image
  const [foodImage, setFoodImage] = useState({uri: foodUrl});

  const handleCancel = () => {
    navigation.navigate("Food Listing");
  };

  // stores image to a state in cache
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
  };

  const foodSchema = yup.object({
    name: yup.string().required(),
    price: yup
      .number()
      .required()
      .positive()
      .test(
        "maxDigitsAfterDecimal",
        "Please use 2 decimal places only",
        (number) => /^\d+(\.\d{1,2})?$/.test(number)
      ),
  });

  return (
    <View>
      <Pressable onPress={handleUpload}>
        <ImageBackground style={styles.foodBannerImage} source={{uri: foodImage.uri}}>
          <Text style={styles.foodBannerImageText}>Upload New Food Image</Text>
        </ImageBackground>
      </Pressable>
      <Formik
        initialValues={{ name: foodName, price: foodPrice }}
        validationSchema={foodSchema}
        onSubmit={async (values) => {
          Keyboard.dismiss();

          // Use original if user doesn't upload
          let imagePath = foodUrl;

          // Upload image to firebase if image exists
          if (foodImage) {
            // Generate uuid
            imagePath = `images/${auth.currentUser.email}/` + uuid.v4();
            const refence = ref(storage, imagePath);
            const imageFile = await fetch(foodImage.uri);
            const bytes = await imageFile.blob();

            await uploadBytes(refence, bytes);
          }

          // Update document in firestore
          await updateDoc(doc(db, "food", foodId), {
            name: values.name,
            price: values.price,
            url: imagePath,
            email: auth.currentUser.email,
          });

          navigation.goBack();
        }}
      >
        {(props) => (
          <CenterWrapper>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Food Name</Text>
              <Text style={styles.labelError}>
                {props.touched.name && props.errors.name}
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your new food name here"
              value={props.values.name}
              onChangeText={props.handleChange("name")}
              onBlur={props.handleBlur("name")}
            />

            <View style={styles.labelContainer}>
              <Text style={styles.label}>Food Price</Text>
              <Text style={styles.labelError}>
                {props.touched.price && props.errors.price}
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your new food price here"
              keyboardType="numeric"
              value={props.values.price}
              onChangeText={props.handleChange("price")}
              onBlur={props.handleBlur("price")}
            />

            <View style={{ marginTop: 5 }}>
              <CustomButton
                content={"Confirm"}
                cstyle={styles.button}
                callback={props.handleSubmit}
              />
              <CustomButton
                content={"Cancel"}
                cstyle={styles.buttonSecondary}
                callback={handleCancel}
              />
            </View>
          </CenterWrapper>
        )}
      </Formik>
    </View>
  );
};

export default FoodEdit;

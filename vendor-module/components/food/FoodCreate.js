import {
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import * as ImagePicker from "expo-image-picker";
import { collection, addDoc } from "firebase/firestore";

import { auth, db, fbUploadImage } from "../../firebase";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";
import styles from "../../styles/styles.js";

const FoodCreate = ({ navigation }) => {
  const [foodImage, setFoodImage] = useState(null);

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
        <ImageBackground
          style={styles.foodBannerImage}
          source={
            foodImage
              ? { uri: foodImage.uri }
              : require("../../assets/images/upload-food.jpg")
          }
        >
          <Text style={styles.foodBannerImageText}>Upload Image</Text>
        </ImageBackground>
      </Pressable>
      <Formik
        initialValues={{ name: "", price: "" }}
        validationSchema={foodSchema}
        onSubmit={async (values) => {
          Keyboard.dismiss();
          
          // Upload image to storage
          let imageName = await fbUploadImage(foodImage, `images/${auth.currentUser.email}/food`);
          
          // Add document to fireStore
          const docRef = await addDoc(collection(db, "food"), {
            name: values.name,
            price: values.price,
            url: `images/${auth.currentUser.email}/food/${imageName}`,
            email: auth.currentUser.email,
          });

          alert(`You succesfully created Food #${values.name}!`);
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
              placeholder="Enter your food name here"
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
              placeholder="Enter your food price here"
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

export default FoodCreate;

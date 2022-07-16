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
import uuid from "react-native-uuid";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";

import { auth, db, storage } from "../../firebase";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";
import styles from "../../styles/styles.js";

const FoodCreate = ({ navigation }) => {
  const [foodImage, setFoodImage] = useState(null);

  const foodSchema = yup.object({
    name: yup.string().required(),
    price: yup.number().required().positive(),
  });

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

          // Generate uuid
          let imageName = uuid.v4();

          // Upload image to firebase
          if (foodImage) {
            const refence = ref(
              storage,
              `images/${auth.currentUser.email}/${imageName}`
            );

            // TODO: name variable properly
            // convert image to array of bytes
            const imageFile = await fetch(foodImage.uri);
            const bytes = await imageFile.blob();

            await uploadBytes(refence, bytes);
          }

          // TODO: link image url ref properly
          // Use v4 lib maybe
          const docRef = await addDoc(collection(db, "food"), {
            name: values.name,
            price: values.price,
            url: `${auth.currentUser.email}/${imageName}`,
            email: auth.currentUser.email,
          });

          alert(`Document written with ID: ${docRef.id}`);
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
              onBlue={props.handleBlur("name")}
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
              onBlue={props.handleBlur("price")}
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

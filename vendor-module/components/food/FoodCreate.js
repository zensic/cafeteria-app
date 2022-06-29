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
import { collection, addDoc } from "firebase/firestore";

import { auth, db } from "../../firebase";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";
import styles from "../../styles/styles.js";

const FoodCreate = ({ navigation }) => {
  const foodSchema = yup.object({
    name: yup.string().required(),
    price: yup.number().required().positive(),
  });

  const handleCancel = () => {
    navigation.navigate("Food Listing");
  };

  return (
    <View>
      <Pressable>
        <ImageBackground
          style={styles.foodBannerImage}
          source={require("../../assets/images/upload-food.jpg")}
        >
          <Text style={styles.foodBannerImageText}>Upload Image</Text>
        </ImageBackground>
      </Pressable>
      <Formik
        initialValues={{ name: "", price: "" }}
        validationSchema={foodSchema}
        onSubmit={async (values) => {
          Keyboard.dismiss();

          const docRef = await addDoc(collection(db, "food"), {
            name: values.name,
            price: values.price,
            url: "placeholder.com",
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
          </CenterWrapper>
        )}
      </Formik>
    </View>
  );
};

export default FoodCreate;

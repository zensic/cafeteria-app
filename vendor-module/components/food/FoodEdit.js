import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { useState } from "react";
import CenterWrapper from "../common/CenterWrapper";

import styles from "../../styles/styles";
import Field from "../common/Field";
import CustomButton from "../common/CustomButton";

const FoodEdit = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleConfirm = () => {};

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
          <Text style={styles.foodBannerImageText}>Upload New Food Image</Text>
        </ImageBackground>
      </Pressable>
      <CenterWrapper>
        <Field
          label={"Food Name"}
          value={name}
          placeholder={"Enter your new name here"}
          callback={setName}
        />
        <Field
          label={"Food Price"}
          value={price}
          placeholder={"Enter your new price here"}
          callback={setPrice}
        />
        <CustomButton
          callback={handleConfirm}
          content={"Confirm"}
          cstyle={styles.button}
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

export default FoodEdit;

import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { storage } from "../../firebase";
import styles from "../../styles/styles";
import CustomButton from "../common/CustomButton";

const FoodItem = (props) => {
  const nav = useNavigation();
  const [imageUrl, setImageUrl] = useState("");

  const handleViewFood = (name, price) => {
    nav.navigate("Food Details", { foodName: name, foodPrice: price });
  };

  const handleEditFood = () => {
    nav.navigate("Food Edit");
  };

  const handleDeleteFood = () => {};

  useEffect(() => {
    getDownloadURL(ref(storage, props.url))
      .then((url) => setImageUrl(url))
      .catch((error => console.log(error)));
  }, []);

  return (
    <Pressable
      style={styles.foodItemContainer}
      onPress={() => {
        handleViewFood(props.foodName, props.foodPrice);
      }}
    >
      <ImageBackground
        style={styles.foodItemImage}
        source={
          imageUrl
            ? { uri: imageUrl }
            : require("../../assets/images/upload-food.jpg")
        }
      >
        <View style={styles.foodItemImageContainer}>
          <Text style={styles.foodItemStar}>
            4.4 <FontAwesome name="star" size={16} color="white" />
          </Text>
          <View style={{ flexDirection: "row" }}>
            <CustomButton
              callback={handleEditFood}
              content="Edit"
              cstyle={styles.foodItemButton}
            />
            <CustomButton
              callback={handleDeleteFood}
              content="Delete"
              cstyle={styles.foodItemButton}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.foodItemTitle}>
        <Text>{props.foodName} </Text>
        <Text>RM {props.foodPrice}</Text>
      </View>
    </Pressable>
  );
};

export default FoodItem;

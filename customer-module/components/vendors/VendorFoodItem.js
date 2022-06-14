import { ImageBackground, Pressable, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import styles from "../../styles/styles";

const VendorFoodItem = (props) => {
  return (
    <Pressable style={styles.foodItemContainer}>
      <ImageBackground
        style={styles.foodItemImage}
        source={require("../../assets/images/food-2.jpg")}
      >
        <View style={styles.foodItemImageContainer}>
          <Text style={styles.foodItemStar}>
            {props.foodRating}{" "}
            <FontAwesome name="star" size={16} color="white" />
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.foodItemTitle}>
        <Text>{props.foodName} </Text>
        <Text>RM {props.foodPrice}</Text>
      </View>
    </Pressable>
  );
};

export default VendorFoodItem;
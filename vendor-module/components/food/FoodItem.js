import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/styles";
import CustomButton from "../common/CustomButton";

const FoodItem = (props) => {
  const nav = useNavigation();

  const handleViewFood = (name, price) => {
    nav.navigate("Food Details", { foodName: name, foodPrice: price });
  };

  const handleEditFood = () => {
    nav.navigate("Food Edit", );
  }

  const handleDeleteFood = () => {
    
  }

  return (
    <Pressable
      style={styles.foodItemContainer}
      onPress={() => {
        handleViewFood(props.foodName, props.foodPrice);
      }}
    >
      <ImageBackground
        style={styles.foodItemImage}
        source={props.url}
      >
        <View style={styles.foodItemImageContainer}>
          <Text
            style={styles.foodItemStar}
          >
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

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
        source={require("../../assets/images/upload-food.jpg")}
      >
        <View style={styles.foodItemImageContainer}>
          <Text
            style={{
              color: "white",
              backgroundColor: "black",
            }}
          >
            4.4 <FontAwesome name="star" size={16} color="white" />
          </Text>
          <View style={{ flexDirection: "row" }}>
            <CustomButton
              callback={handleEditFood}
              content="Edit"
              cstyle={{ backgroundColor: "#F4A15D" }}
            />
            <CustomButton
              callback={handleDeleteFood}
              content="Delete"
              cstyle={{ backgroundColor: "#F4A15D", marginLeft: 5 }}
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

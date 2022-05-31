import { StyleSheet, Text, View } from "react-native";
import React from "react";

import styles from "../../styles/styles.js";
import CustomButton from "../common/CustomButton";
import FoodItem from "./FoodItem.js";
import CenterWrapper from "../common/CenterWrapper.js";
import { useNavigation } from "@react-navigation/native";

const FoodListing = () => {
  const nav = useNavigation();

  const handleCreateFood = () => {
    nav.navigate("Food Creation");
  };

  return (
    <CenterWrapper>
      <CustomButton
        callback={handleCreateFood}
        content={"Create New Food"}
        cstyle={styles.button}
      />
      {data.food.map((foodItem) => (
        <FoodItem
          key={foodItem.id}
          image={foodItem.url}
          foodName={foodItem.name}
          foodPrice={foodItem.price}
        />
      ))}
    </CenterWrapper>
  );
};

export default FoodListing;

const data = {
  food: [
    {
      id: 1,
      name: "Fried rice",
      price: 4.99,
      url: "",
    },
    {
      id: 2,
      name: "Chicken rice",
      price: 5.99,
      url: "",
    },
    {
      id: 3,
      name: "Nasi lemak",
      price: 3.5,
      url: "",
    },
    {
      id: 4,
      name: "Roti canai",
      price: 3.0,
      url: "",
    },
  ],
};

import { StyleSheet, Text, View } from "react-native";
import React from "react";

import styles from "../../styles/styles.js";
import CustomButton from "../common/CustomButton";
import FoodItem from "./FoodItem.js";

const Food = () => {
  return (
    <View>
      <CustomButton content={"Create New Food"} cstyle={styles.button} />
      <Text>Active Food</Text>
      {data.food.map((foodItem) => (
        <FoodItem
          key={foodItem.id}
          image={foodItem.url}
          foodName={foodItem.name}
          foodPrice={foodItem.price}
        />
      ))}
    </View>
  );
};

export default Food;

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

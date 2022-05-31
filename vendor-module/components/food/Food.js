import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FoodListing from "./FoodListing";
import FoodCreate from "./FoodCreate";
import FoodDetails from "./FoodDetails";
import FoodEdit from "./FoodEdit";

const Stack = createStackNavigator();

const Food = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Food Listing" component={FoodListing} />
      <Stack.Screen name="Food Creation" component={FoodCreate} />
      <Stack.Screen name="Food Details" component={FoodDetails} />
      <Stack.Screen name="Food Edit" component={FoodEdit} />
    </Stack.Navigator>
  );
};

export default Food;

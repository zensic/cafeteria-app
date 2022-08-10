import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderListing from "./OrderListing.js";
import OrderDetails from "./OrderDetails.js";

const Stack = createStackNavigator();

const Orders = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Incoming Orders" component={OrderListing} />
      <Stack.Screen name="Order Details" component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default Orders;

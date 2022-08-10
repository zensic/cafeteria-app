import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import VendorListing from "./VendorListing.js";
import FoodListing from "./Food/FoodListing.js";
// import CartButton from "../cart/CartButton.js";

const Stack = createStackNavigator();

const Vendors = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Vendors"
        component={VendorListing}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Food Listing"
        component={FoodListing}
        // options={{
        //   headerRight: () => <CartButton />,
        // }}
      />
    </Stack.Navigator>
  );
};

export default Vendors;

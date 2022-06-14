import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import VendorListing from "./VendorListing";
import VendorFoodListing from "./VendorFoodListing";
import CartButton from "../common/CartButton";

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
        name="Vendor Food Listing"
        component={VendorFoodListing}
        options={{
          headerRight: () => <CartButton />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Vendors;

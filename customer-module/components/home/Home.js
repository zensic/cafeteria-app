import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import Vendors from "../vendors/Vendors";
import Profile from "../profile/Profile";
import CartButton from "../cart/CartButton";
import { primaryColor, secondaryColor, accentColor } from "../../styles/styles";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import OrderListing from "../orders/OrderListing";

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Place an order"
      screenOptions={{
        drawerActiveTintColor: secondaryColor,
        drawerActiveBackgroundColor: accentColor,
        drawerStyle: { backgroundColor: primaryColor },
      }}
    >
      <Drawer.Screen
        name="Place an order"
        component={Vendors}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";

          // If child route (in stack navigator) is on vendor food listing, disable header
          // Else only add cart buttons
          if (routeName == "Food Listing")
            return { headerShown: false };
          return { headerRight: () => <CartButton /> };
        }}
      />
      <Drawer.Screen name="Order History" component={OrderListing} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default Home;

import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import Vendors from "../vendors/Vendors";
import Profile from "../profile/Profile";
import Orders from "../orders/Orders";
import CartButton from "../common/CartButton";
import { primaryColor, secondaryColor, accentColor } from "../../styles/styles";

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Place an order"
      screenOptions={{
        drawerActiveTintColor: secondaryColor,
        drawerActiveBackgroundColor: accentColor,
        drawerStyle: {backgroundColor: primaryColor}
      }}
    >
      <Drawer.Screen
        name="Place an order"
        component={Vendors}
        options={{
          headerRight: () => <CartButton />,
        }}
      />
      <Drawer.Screen name="Order history" component={Orders} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default Home;

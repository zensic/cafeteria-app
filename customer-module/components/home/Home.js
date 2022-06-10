import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import Vendors from "../vendors/Vendors";
import Profile from "../profile/Profile";
import Orders from "../orders/Orders";

const Drawer = createDrawerNavigator();

const Home = () => {

  return (
    <Drawer.Navigator initialRouteName="Vendors">
      <Drawer.Screen name="Vendors" component={Vendors} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Orders" component={Orders} />
    </Drawer.Navigator>
  );
};

export default Home;

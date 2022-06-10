import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import styles from "../../styles/styles";
import Vendors from "../vendors/Vendors";
import Profile from "../profile/Profile";
import History from "../history/History";

const Drawer = createDrawerNavigator();

const Home = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Vendors" component={Vendors} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
};

export default Home;

import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import Orders from "../orders/Orders.js";
import Food from "../food/Food.js";
import Reports from "../reports/Reports.js";
import Profile from "../profile/Profile.js";

const BottomTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Orders" component={Orders} />
      <BottomTabs.Screen name="Food" component={Food} />
      <BottomTabs.Screen name="Reports" component={Reports} />
      <BottomTabs.Screen name="Profile" component={Profile} />
    </BottomTabs.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import React from "react";
import { primaryColor } from "../../styles/styles.js";
import Orders from "../orders/Orders.js";
import Food from "../food/Food.js";
import Reports from "../reports/Reports.js";
import Profile from "../profile/Profile.js";

const BottomTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: `${primaryColor}`,
      }}
    >
      <BottomTabs.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Food"
        component={Food}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-variant"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bar-graph" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shop" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default Home;

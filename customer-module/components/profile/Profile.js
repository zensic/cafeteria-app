import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileDetails from "./ProfileDetails.js";
import ProfileEdit from "./ProfileEdit.js";
// import CartButton from "../cart/CartButton.js";

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile Details"
        component={ProfileDetails}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Edit Profile"
        component={ProfileEdit}
      />
    </Stack.Navigator>
  );
};

export default Profile;

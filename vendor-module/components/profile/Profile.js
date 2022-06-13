import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileDetails from "./ProfileDetails";
import ProfileEdit from "./ProfileEdit";

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vendor Details" component={ProfileDetails}/>
      <Stack.Screen name="Edit Details" component={ProfileEdit} />
    </Stack.Navigator>
  )

};

export default Profile;

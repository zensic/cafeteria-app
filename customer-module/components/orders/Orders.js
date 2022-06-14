import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import OrderListing from "./OrderListing";

const Stack = createStackNavigator();

const Orders = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderListing"
        component={OrderListing}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default Orders
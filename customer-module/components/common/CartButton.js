import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import { primaryColor } from "../../styles/styles";

const CartButton = () => {
  return (
    <Pressable style={cartStyle.cart}>
      <Entypo name="shopping-cart" size={24} color="white" />
      <Text style={cartStyle.cartText}>Cart</Text>
    </Pressable>
  );
};

const cartStyle = StyleSheet.create({
  cart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: `${primaryColor}`,
  },
  cartText: {
    color: "white",
    marginLeft: 5,
  },
});

export default CartButton;

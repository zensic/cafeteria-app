import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { primaryColor } from "../../styles/styles";
import Cart from "./Cart";

const CartButton = () => {

  const [visible, setVisible] = useState(false);

  return (
    <Pressable style={cartStyle.cart} onPress={() => setVisible(true)}>
      <Cart visible={visible} setVisible={setVisible}/>
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

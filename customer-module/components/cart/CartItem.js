import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import styles, { primaryColor } from "../../styles/styles";
import Hr from "../common/Hr";

const CartItem = (props) => {
  return (
    <>
      <Hr />
      <Pressable style={cartItemStyles.container}>
        <Text style={cartItemStyles.quantity}>1x</Text>
        <Image
          style={cartItemStyles.image}
          source={require("../../assets/images/food-1.jpg")}
        />
        <View style={cartItemStyles.textContainer}>
          <View style={cartItemStyles.headingContainer}>
            <Text style={cartItemStyles.title}>Food Name</Text>
            <Text style={cartItemStyles.title}>RM 10.99</Text>
          </View>
          <Text style={cartItemStyles.desc}>Variety</Text>
        </View>
      </Pressable>
    </>
  );
};

export default CartItem;

const cartItemStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    color: `${primaryColor}`,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: `${primaryColor}`,
    fontWeight: "bold",
  },
});

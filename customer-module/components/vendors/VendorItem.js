import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { primaryColor } from "../../styles/styles";

const VendorItem = (props) => {
  return (
    <Pressable
      style={vendorItemStyle.container}
      onPress={() => {
        props.callback();
      }}
    >
      <Image
        style={vendorItemStyle.image}
        source={require("../../assets/images/food-1.jpg")}
      />
      <View style={vendorItemStyle.textContainer}>
        <Text style={vendorItemStyle.text}>{props.name}</Text>
        <Text style={vendorItemStyle.text}>
          {props.rating}{" "}
          <FontAwesome name="star" size={16} color={primaryColor} />
        </Text>
      </View>
      <Text>{props.desc}</Text>
    </Pressable>
  );
};

export default VendorItem;

const vendorItemStyle = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  image: {
    height: 150,
    width: "100%",
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
  },
});

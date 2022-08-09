import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { primaryColor } from "../../styles/styles";
import Hr from "../common/Hr";
import { fbGetDownloadURL } from "../../firebase";

const CartItem = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fbGetDownloadURL(props.itemUrl, setImageUrl);
  }, [])

  return (
    <View>
      <Hr />
      <Pressable style={cartItemStyles.container}>
        <Text style={cartItemStyles.quantity}>{props.itemQuantity}x</Text>
        <Image
          style={cartItemStyles.image}
          source={
          !imageUrl || imageUrl == ""
            ? require("../../assets/images/no-image.jpg")
            : { uri: imageUrl }
        }
        />
        <View style={cartItemStyles.textContainer}>
          <View style={cartItemStyles.headingContainer}>
            <Text style={cartItemStyles.title}>{props.itemName}</Text>
            <Text style={cartItemStyles.title}>{props.itemPrice}</Text>
          </View>
          <Text style={cartItemStyles.desc}>Variety</Text>
        </View>
      </Pressable>
    </View>
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

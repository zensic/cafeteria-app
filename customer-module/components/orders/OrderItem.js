import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

import { accentColor } from "../../styles/styles";
import { fbGetDownloadURL } from "../../firebase";

const OrderItem = (props) => {

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fbGetDownloadURL(props.url, setImageUrl);
  }, [])

  return (
    <Pressable style={styles.orderContainer}>
      <Image
        style={styles.vendorImage}
        source={
          !imageUrl || imageUrl == ""
            ? require("../../assets/images/no-image.jpg")
            : { uri: imageUrl }
        }
      />
      <View style={styles.textContainer}>
        <View style={styles.foodTitleContainer}>
          <Text style={styles.foodTitle}>{props.foodName}</Text>
          <Text style={styles.foodTitle}>RM {props.foodPrice * props.foodQuantity} ({props.foodQuantity})</Text>
        </View>
        <Text>ID# {props.orderId}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </Pressable>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderContainer: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    backgroundColor: `${accentColor}`,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  vendorImage: {
    height: 100,
    width: 100,
    borderRadius: 12,
  },
  foodTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  foodTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "gray",
  },
});

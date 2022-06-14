import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { accentColor } from "../../styles/styles";

const OrderItem = (props) => {
  return (
    <Pressable style={styles.orderContainer}>
      <Image
        style={styles.vendorImage}
        source={require("../../assets/images/food-1.jpg")}
      />
      <View style={styles.textContainer}>
        <View style={styles.foodTitleContainer}>
          <Text style={styles.foodTitle}>{props.vendorName}</Text>
          <Text style={styles.foodTitle}>RM {props.foodPrice}</Text>
        </View>
        <Text>{props.foodName}</Text>
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
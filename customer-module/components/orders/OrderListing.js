import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CenterWrapper from "../common/CenterWrapper";
import OrderItem from "./OrderItem";
import Hr from "../common/Hr";
import { fbGetCurrentOrders, fbGetPastOrders } from "../../firebase";

const OrderListing = ({ navigation }) => {
  const [orderList, setOrderList] = useState(() => []);
  const [pastOrderList, setPastOrderList] = useState(() => []);
  const isFocused = navigation.isFocused();

  useEffect(() => {
    fbGetCurrentOrders(setOrderList);
    fbGetPastOrders(setPastOrderList);
  }, [isFocused]);

  // useEffect(() => {

  // }, [isFocused]);

  return (
    <CenterWrapper>
      <Text style={styles.orderTitle}>Current Orders</Text>
      {orderList.map((order) => (
        <OrderItem
          key={order.id}
          vendorName={order.vendor}
          foodName={order.name}
          foodPrice={order.price}
          date={order.createdAt}
        />
      ))}
      <Text style={styles.orderTitle}>Past Orders</Text>
      {pastOrderList.map((order) => (
        <OrderItem
          key={order.id}
          vendorName={order.vendor}
          foodName={order.name}
          foodPrice={order.price}
          date={order.createdAt}
        />
      ))}
    </CenterWrapper>
  );
};

export default OrderListing;

const styles = StyleSheet.create({
  orderTitle: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});

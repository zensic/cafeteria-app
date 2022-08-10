import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CenterWrapper from "../common/CenterWrapper";
import OrderItem from "./OrderItem";
import { fbGetCurrentOrders, fbGetPastOrders } from "../../firebase";
import { useIsFocused } from "@react-navigation/native";

const OrderListing = () => {
  const [orderList, setOrderList] = useState(() => []);
  const [pastOrderList, setPastOrderList] = useState(() => []);
  const isFocused = useIsFocused();

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
          orderId={order.id}
          vendorName={order.vendor}
          foodName={order.name}
          foodPrice={order.price}
          foodQuantity={order.quantity}
          date={order.createdAt}
          url={order.url}
        />
      ))}
      <Text style={styles.orderTitle}>Completed Orders</Text>
      {pastOrderList.map((order) => (
        <OrderItem
          key={order.id}
          orderId={order.id}
          vendorName={order.vendor}
          foodName={order.name}
          foodPrice={order.price}
          foodQuantity={order.quantity}
          date={order.createdAt}
          url={order.url}
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

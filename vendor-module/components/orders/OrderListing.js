import { Text, Pressable, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "../../styles/styles.js";
import CenterWrapper from "../common/CenterWrapper";
import { ScrollView } from "react-native-gesture-handler";

import { fbGetOrders, fbGetPastOrders } from "../../firebase.js";
import OrderItem from "./OrderItem.js";

const OrderListing = ({ navigation }) => {
  const [orderList, setOrderList] = useState(() => []);
  const [pastOrderList, setPastOrderList] = useState(() => []);

  useEffect(() => {
    fbGetOrders(setOrderList);
    fbGetPastOrders(setPastOrderList);
  }, [navigation.isFocused]);

  const handleView = (orderItem, showConfirm) => {
    navigation.push("Order Details", {
      order: orderItem,
      showConfirm: showConfirm,
    });
  };

  return (
    <CenterWrapper>
      <ScrollView>
        {orderList.map((order) => (
          <OrderItem
            cstyle={styles.orderItem}
            url={order.url}
            callback={() => handleView(order, "true")}
            id={order.id}
            location={order.location}
            name={order.name}
            price={order.price}
            quantity={order.quantity}
            createdAt={order.createdAt}
          />
        ))}
        <Text style={{ fontWeight: "bold", fontSize: 16, marginVertical: 10 }}>
          Completed Orders
        </Text>
        {pastOrderList.map((order) => (
          <OrderItem
            cstyle={[styles.orderItem, {backgroundColor: "#add8e6"}]}
            url={order.url}
            callback={() => handleView(order, "false")}
            id={order.id}
            location={order.location}
            name={order.name}
            price={order.price}
            quantity={order.quantity}
            createdAt={order.createdAt}
          />
        ))}
      </ScrollView>
    </CenterWrapper>
  );
};
export default OrderListing;

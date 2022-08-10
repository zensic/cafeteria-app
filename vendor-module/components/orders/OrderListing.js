import { Text, Pressable, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "../../styles/styles.js";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton.js";
import { ScrollView } from "react-native-gesture-handler";
import useAsync from "../common/useAsync";
import Hr from "../common/Hr";
import { fbGetOrders } from "../../firebase.js";

const OrderListing = ({ navigation }) => {
  const [orderList, setOrderList] = useState(() => []);

  useEffect(() => {
    fbGetOrders(setOrderList);
  }, []);

  const handleHistory = () => {
    navigation.navigate("Order History");
  };

  const handleView = (orderItem) => {
    navigation.navigate("Order Details", { order: orderItem });
  };

  return (
    <CenterWrapper>
      <ScrollView>
        {orderList.map((order) => (
          <Pressable
            style={styles.orderItem}
            onPress={() => {
              handleView(order);
            }}
            key={order.id}
          >
            <FontAwesome5 name="clipboard" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text>{order.createdAt}</Text>
              <Text>{order.location}</Text>
              <Text>{order.customer}</Text>
              <Text>{`${order.name} x${order.quantity}`}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Text style={{ fontWeight: "bold", fontSize: 16, marginVertical: 10 }}>Completed Orders</Text>
    </CenterWrapper>
  );
};
export default OrderListing;

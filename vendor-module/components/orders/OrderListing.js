import { Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "../../styles/styles.js";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton.js";
import { ScrollView } from "react-native-gesture-handler";

const OrderListing = ({ navigation }) => {
  const handleHistory = () => {
    navigation.navigate("Order History");
  };

  const handleView = (orderItem) => {
    navigation.navigate("Order Details", { order: orderItem });
  };

  return (
    <CenterWrapper>
      <ScrollView>
        <CustomButton
          callback={handleHistory}
          content={"View Order History"}
          cstyle={styles.button}
        />
        {data.orders.map((order) => (
          <Pressable
            style={styles.orderItem}
            onPress={() => {
              handleView(order);
            }}
            key={order.id}
          >
            <FontAwesome5 name="clipboard" size={24} color="black" />
            <Text
              style={{ marginLeft: 10 }}
            >{`Order #${order.id} ${order.status} ${order.time}`}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </CenterWrapper>
  );
};

export default OrderListing;

// "Fake" API data
const data = {
  orders: [
    {
      id: 1,
      status: "Placed",
      time: "1:30 pm",
    },
    {
      id: 2,
      status: "Placed",
      time: "1:35 pm",
    },
  ],
};

import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

import styles from "../../styles/styles.js";
import CenterWrapper from "../common/CenterWrapper";

const OrderHistory = () => {
  return (
    <CenterWrapper>
      <FlatList
        data={api.orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={styles.orderItem}
          >
            <FontAwesome5 name="clipboard" size={24} color="black" />
            <Text
              style={{ marginLeft: 10 }}
            >{`Order #${item.id} ${item.status} ${item.time}`}</Text>
          </View>
        )}
      />
    </CenterWrapper>
  );
};

export default OrderHistory;

// "Fake" API data
const api = {
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

import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CenterWrapper from "../common/CenterWrapper.js";
import styles from "../../styles/styles.js";
import CustomButton from "../common/CustomButton.js";

const Orders = () => {
  return (
    <CenterWrapper>
      <CustomButton content={"View Order History"} cstyle={styles.button} />
      <Text>Orders</Text>
      {data.orders.map((order) => (
        <CustomButton
          key={order.id}
          content={`#${order.id} ${order.status} ${order.time}`}
          cstyle={styles.button}
        />
      ))}
    </CenterWrapper>
  );
};

export default Orders;

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

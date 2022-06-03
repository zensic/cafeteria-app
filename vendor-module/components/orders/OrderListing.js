import { View, Text } from "react-native";
import React from "react";

import styles from "../../styles/styles.js";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton.js";

const OrderListing = ({ navigation }) => {
  const handleView = () => {
    navigation.navigate();
  };

  return (
    <CenterWrapper>
      <CustomButton content={"View Order History"} cstyle={styles.button} />
      {data.orders.map((order) => (
        <CustomButton
          callback={handleView}
          key={order.id}
          content={`#${order.id} ${order.status} ${order.time}`}
          cstyle={styles.button}
        />
      ))}
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

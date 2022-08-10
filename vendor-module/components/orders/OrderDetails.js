import { View, Text } from "react-native";
import React from "react";

import styles from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";
import OrderField from "./OrderField";

const OrderDetails = () => {
  const handleReady = () => {};
  const handleCancel = () => {};

  return (
    <CenterWrapper>
      <OrderField orderLabel={"Order number"} orderValue={"#123456"} />
      <OrderField orderLabel={"Food name"} orderValue={"Pisang goreng"} />
      <OrderField orderLabel={"Food price"} orderValue={"RM10.00"} />
      <OrderField orderLabel={"Order Time"} orderValue={"1.00 pm"} />
      <OrderField orderLabel={"Quantity"} orderValue={"1"} />
      <OrderField orderLabel={"Username"} orderValue={"meegoreng@mail.com"} />
      <CustomButton
        callback={handleReady}
        content={"Order Ready"}
        cstyle={styles.button}
      />
      <CustomButton
        callback={handleCancel}
        content={"Cancel Order"}
        cstyle={styles.buttonSecondary}
      />
    </CenterWrapper>
  );
};

export default OrderDetails;

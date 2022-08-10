import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import CustomButton from "../common/CustomButton";
import OrderField from "./OrderField";
import { fbCompleteOrder } from "../../firebase";

const OrderDetails = ({ route }) => {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleReady = () => {
    fbCompleteOrder(order.id).then(() => {
      alert(`Order #${order.id} completed!`)
      navigation.goBack();
    })

  };
  // const handleCancel = () => {};

  if (route.params.showConfirm != "true") {
    return (
      <CenterWrapper>
        <OrderField orderLabel={"Order Id"} orderValue={order.id} />
        <OrderField orderLabel={"Username"} orderValue={order.customer} />
        <OrderField orderLabel={"Food name"} orderValue={order.name} />
        <OrderField orderLabel={"Quantity"} orderValue={order.quantity} />
        <OrderField orderLabel={"Food price"} orderValue={order.price} />
        <OrderField orderLabel={"Order Time"} orderValue={order.createdAt} />
      </CenterWrapper>
    );
  }

  return (
    <CenterWrapper>
      <OrderField orderLabel={"Order Id"} orderValue={order.id} />
      <OrderField orderLabel={"Username"} orderValue={order.customer} />
      <OrderField orderLabel={"Food name"} orderValue={order.name} />
      <OrderField orderLabel={"Quantity"} orderValue={order.quantity} />
      <OrderField orderLabel={"Food price"} orderValue={order.price} />
      <OrderField orderLabel={"Order Time"} orderValue={order.createdAt} />

      <CustomButton
        callback={handleReady}
        content={"Complete Order"}
        cstyle={styles.button}
      />
      {/* <CustomButton
        callback={handleCancel}
        content={"Cancel Order"}
        cstyle={styles.buttonSecondary}
      /> */}
    </CenterWrapper>
  );
};

export default OrderDetails;

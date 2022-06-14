import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CenterWrapper from "../common/CenterWrapper";
import OrderItem from "./OrderItem";

const OrderListing = () => {
  return (
    <CenterWrapper>
      <Text style={styles.orderTitle}>Past Orders</Text>
      {data.orders.map((order) => (
        <OrderItem 
          key={order.id} 
          vendorName={order.vendorName}
          foodName={order.foodName}
          foodPrice={order.foodPrice}
          date={order.date}
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
    fontSize: 16
  }
});

const data = {
  orders: [
    {
      id: 1,
      vendorName: "ABC vendor",
      foodName: "Nasi Lemak",
      foodPrice: 8.99,
      date: "13-06-2022",
    },
    {
      id: 2,
      vendorName: "XYZ vendor",
      foodName: "Cendol",
      foodPrice: 2.99,
      date: "12-06-2022",
    },
    {
      id: 3,
      vendorName: "Baa vendor",
      foodName: "Fried Rice",
      foodPrice: 3.99,
      date: "11-06-2022",
    },
  ],
};

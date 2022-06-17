import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import styles, {
  primaryColor,
  secondaryColor,
  accentColor,
} from "../../styles/styles";
import CustomButton from "../common/CustomButtom.js";
import CartItem from "./CartItem";
import Hr from "../common/Hr";

const Cart = (props) => {
  return (
    <Modal
      animationType="fade"
      visible={props.visible}
      transparent={true}
      onRequestClose={() => {
        props.setVisible(false);
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Cart</Text>
            <Pressable onPress={() => props.setVisible(false)}>
              <AntDesign name="close" size={24} color="white" />
            </Pressable>
          </View>
          <ScrollView
            contentContainerStyle={{ padding: 10 }}
            style={styles.modalContent}
          >
            <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
              Table Number #1
            </Text>
            <CartItem />
            <CartItem />
            <CartItem />
            <Hr />
            <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
              Payment method
            </Text>
            <View style={cartStyles.deliveryContainer}>
              <Ionicons name="cash-sharp" size={24} color={secondaryColor} />
              <Text style={cartStyles.deliveryText}>Cash on delivery</Text>
            </View>
          </ScrollView>
          <View
            style={[styles.modalButtonContainer, cartStyles.totalContainer]}
          >
            <View style={cartStyles.total}>
              <Text style={cartStyles.totalText}>Total</Text>
              <Text style={cartStyles.totalText}>RM 10.99</Text>
            </View>
            <CustomButton
              cstyle={styles.modalButton}
              tstyle={styles.modalButtonText}
              content="Place Order"
              callback={() => {
                props.setVisible(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const cartStyles = StyleSheet.create({
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    backgroundColor: `${accentColor}`,
  },
  deliveryText: {
    marginLeft: 10,
    color: `${secondaryColor}`,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  totalContainer: {
    backgroundColor: `${secondaryColor}`,
  },
  totalText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default Cart;

const data = {
  cart: [{}],
};

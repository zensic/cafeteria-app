import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import styles, { secondaryColor, accentColor } from "../../styles/styles";
import CustomButton from "../common/CustomButtom.js";
import CartItem from "./CartItem";
import Hr from "../common/Hr";
import { addOrders, getCartList } from "../../firebase";

const Cart = (props) => {
  const isFocused = useIsFocused();
  const [location, setLocation] = useState("");
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCartList(setCartList, setTotalPrice);
  }, [isFocused]);

  const handleConfirm = async () => {
    // Validate location field
    if (location.length < 1) {
      alert("Please enter your current location");
      return 0;
    }

    props.setVisible(false);

    // Add cart items to vendor orders
    await addOrders(location);
    alert("The vendors have received your order!");

    // Refresh list of cart items
    getCartList(setCartList, setTotalPrice);
  };

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
              Enter your location
            </Text>
            <TextInput
              style={cartStyles.deliveryContainer}
              placeholder="Table #123"
              value={location}
              onChangeText={(text) => setLocation(text)}
            />
            <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
              Order List
            </Text>
            {cartList.length < 1 ? (
              <Text style={{ marginBottom: 5, fontStyle: "italic" }}>
                Cart is empty, place something in the cart!
              </Text>
            ) : (
              cartList.map((cItem) => (
                <CartItem
                  key={cItem[0]}
                  itemId={cItem[1]}
                  itemName={cItem[2]}
                  itemUrl={cItem[3]}
                  itemQuantity={cItem[4]}
                  itemPrice={cItem[5]}
                  vendorEmail={cItem[6]}
                />
              ))
            )}
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
              <Text style={cartStyles.totalText}>RM {totalPrice}</Text>
            </View>
            <CustomButton
              cstyle={styles.modalButton}
              tstyle={styles.modalButtonText}
              content="Place Order"
              callback={() => {
                handleConfirm();
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

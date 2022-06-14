import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

import { primaryColor } from "../../styles/styles";

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
            <AntDesign name="close" size={24} color="white" />
          </View>
          <View style={styles.modalContent}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            <Text>Item 3</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: `${primaryColor}`,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },  
  modalContent: {
    padding: 20,
  },
});

export default Cart;

const data = {
  cart: [{}],
};

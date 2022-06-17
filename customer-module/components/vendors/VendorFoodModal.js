import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import styles, { primaryColor } from "../../styles/styles";
import CustomButton from "../common/CustomButtom";
import Hr from "../common/Hr";

const VendorFoodModal = (props) => {
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
            <Text style={styles.modalTitle}>Details</Text>
            <Pressable onPress={() => props.setVisible(false)}>
              <AntDesign name="close" size={24} color="white" />
            </Pressable>
          </View>
          <Image
            style={styles.foodBannerImage}
            source={require("../../assets/images/food-2.jpg")}
          />
          <ScrollView
            contentContainerStyle={{ padding: 10 }}
            style={styles.modalContent}
          >
            <View style={foodModalStyles.titleContainer}>
              <Text style={foodModalStyles.title}>Fried Rice</Text>
              <Text style={foodModalStyles.title}>RM 10.99</Text>
            </View>
            <Hr />
            <View style={foodModalStyles.quantityContainer}>
              <Pressable>
                <AntDesign name="minuscircle" size={36} color={primaryColor} />
              </Pressable>

              <Text style={foodModalStyles.quantity}>1</Text>
              <Pressable>
                <AntDesign name="pluscircle" size={36} color={primaryColor} />
              </Pressable>
            </View>
          </ScrollView>
          <View style={styles.modalButtonContainer}>
            <CustomButton
              cstyle={styles.modalButton}
              tstyle={styles.modalButtonText}
              content={"Add to Cart"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VendorFoodModal;

const foodModalStyles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 24,
  },
});

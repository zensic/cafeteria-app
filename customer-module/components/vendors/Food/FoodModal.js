import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import styles, { primaryColor } from "../../../styles/styles";
import CustomButton from "../../common/CustomButtom";
import Hr from "../../common/Hr";
import { auth, createCartItem } from "../../../firebase";
import UserContext from "../UserContext";

const FoodModal = (props) => {
  const vendorId = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async () => {
    // Generate cart item in firebase
    await createCartItem(
      auth.currentUser.email,
      vendorId,
      props.foodId,
      props.foodName,
      props.foodUrlRelative,
      quantity,
      props.foodPrice
    );

    // Closes modal upon submit
    props.setVisible(false);
  };

  const handlePlus = () => {
    setQuantity((q) => q + 1);
  };

  const handleMinus = () => {
    setQuantity((q) => (q > 1 ? q - 1 : q));
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
            <Text style={styles.modalTitle}>Details</Text>
            <Pressable onPress={() => props.setVisible(false)}>
              <AntDesign name="close" size={24} color="white" />
            </Pressable>
          </View>
          <Image
            style={styles.foodBannerImage}
            source={
              !props.foodUrl || props.foodUrl == ""
                ? require("../../../assets/images/food-1.jpg")
                : { uri: props.foodUrl }
            }
          />
          <ScrollView
            contentContainerStyle={{ padding: 10 }}
            style={styles.modalContent}
          >
            <View style={foodModalStyles.titleContainer}>
              <Text style={foodModalStyles.title}>{props.foodName}</Text>
              <Text style={foodModalStyles.title}>RM {props.foodPrice}</Text>
            </View>
            <Hr />
          </ScrollView>
          <View style={styles.modalButtonContainer}>
            <View style={foodModalStyles.quantityContainer}>
              <Text style={foodModalStyles.title}>Quantity</Text>
              <View style={foodModalStyles.quantityNumberContainer}>
                <Pressable onPress={handleMinus}>
                  <AntDesign
                    name="minussquare"
                    size={36}
                    color={primaryColor}
                  />
                </Pressable>
                <Text style={foodModalStyles.quantity}>{quantity}</Text>
                <Pressable onPress={handlePlus}>
                  <AntDesign name="plussquare" size={36} color={primaryColor} />
                </Pressable>
              </View>
            </View>
            <CustomButton
              cstyle={styles.modalButton}
              tstyle={styles.modalButtonText}
              content={"Add to Cart"}
              callback={handleSubmit}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FoodModal;

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
    width: "100%",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  quantityNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 24,
  },
});

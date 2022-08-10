import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { doc, deleteDoc } from "firebase/firestore";

import { db, fbGetDownloadURL } from "../../firebase";
import styles, { primaryColor } from "../../styles/styles";
import CustomButton from "../common/CustomButton";

const FoodItem = (props) => {
  const nav = useNavigation();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fbGetDownloadURL(props.url, setImageUrl);
  }, []);

  // const handleViewFood = () => {
  //   nav.navigate("Food Details", {
  //     foodName: props.foodName,
  //     foodPrice: props.foodPrice,
  //     foodUrl: imageUrl,
  //   });
  // };

  const handleEditFood = () => {
    nav.navigate("Food Edit", {
      foodId: props.foodId,
      foodName: props.foodName,
      foodPrice: props.foodPrice,
      foodUrl: imageUrl,
    });
  };

  const handleDeleteFood = async () => {
    await deleteDoc(doc(db, "food", props.foodId));
    alert(`Deleted ${props.foodName}!`);
    nav.navigate("Orders");
  };

  return (
    <Pressable
      style={styles.foodItemContainer}
      // onPress={() => {
      //   handleViewFood();
      // }}
    >
      <ImageBackground
        style={styles.foodItemImage}
        source={
          !imageUrl || imageUrl == ""
            ? require("../../assets/images/no-image.jpg")
            : { uri: imageUrl }
        }
      >
        <View style={styles.foodItemImageContainer}>
          {/* <Text style={styles.foodItemStar}>
            4.4 <FontAwesome name="star" size={16} color="white" />
          </Text> */}
          <View style={{ flexDirection: "row" }}>
            <CustomButton
              callback={handleEditFood}
              content="Edit"
              cstyle={[styles.foodItemButton, {backgroundColor: primaryColor}]}
            />
            <CustomButton
              callback={handleDeleteFood}
              content="Delete"
              cstyle={styles.foodItemButton}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.foodItemTitle}>
        <Text>{props.foodName} </Text>
        <Text>RM {props.foodPrice}</Text>
      </View>
    </Pressable>
  );
};

export default FoodItem;

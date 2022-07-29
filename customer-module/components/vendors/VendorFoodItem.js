import { ImageBackground, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import styles from "../../styles/styles";
import VendorFoodModal from "./VendorFoodModal";
import { fbGetDownloadURL } from "../../firebase";

const VendorFoodItem = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    fbGetDownloadURL(props.url, setImageUrl);
  }, [])

  return (
    <Pressable onPress={() => setVisible(true)} style={styles.foodItemContainer}>
      <VendorFoodModal 
        visible={visible} 
        setVisible={setVisible}
        foodId={props.foodId}
        foodUrlRelative={props.url}
        foodUrl={imageUrl}
        foodName={props.foodName}
        foodPrice={props.foodPrice}
      />
      <ImageBackground
        style={styles.foodItemImage}
        source={
          !imageUrl || imageUrl == ""
            ? require("../../assets/images/food-1.jpg")
            : { uri: imageUrl }
        }
      >
        <View style={styles.foodItemImageContainer}>
          <Text style={styles.foodItemStar}>
            {props.foodRating}{" "}
            <FontAwesome name="star" size={16} color="white" />
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.foodItemTitle}>
        <Text>{props.foodName} </Text>
        <Text>RM {props.foodPrice}</Text>
      </View>
    </Pressable>
  );
};

export default VendorFoodItem;

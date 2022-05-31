import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../../styles/styles";
import CustomButton from "../common/CustomButton";

const FoodItem = (props) => {
  return (
    <Pressable
      style={styles.foodItemContainer}
      onPress={() => {
        props.callback();
      }}
    >
      <ImageBackground
        style={styles.foodItemImage}
        source={require("../../assets/images/upload-food.jpg")}
      >
        <View style={styles.foodItemImageContainer}>
          <Text
            style={{
              color: "white",
              backgroundColor: "black",
            }}
          >
            4.4 <FontAwesome name="star" size={16} color="white" />
          </Text>
          <View style={{ flexDirection: "row" }}>
            <CustomButton
              content="Edit"
              cstyle={{ backgroundColor: "#F4A15D"}}
            />
            <CustomButton
              content="Delete"
              cstyle={{ backgroundColor: "#F4A15D", marginLeft: 5 }}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={styles.foodItemTitle}
      >
        <Text>{props.foodName} </Text>
        <Text>RM {props.foodPrice}</Text>
      </View>
    </Pressable>
  );
};

export default FoodItem;

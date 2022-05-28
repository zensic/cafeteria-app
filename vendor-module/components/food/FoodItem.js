import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
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
        <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 10, justifyContent: "space-between" }}>
          <Text
            style={{
              color: "white",
              backgroundColor: "black",
            }}
          >
            4.4 *
          </Text>
          <View style={{flexDirection: "row"}}>
            <CustomButton content="View" cstyle={{backgroundColor: "#F4A15D"}}/>
            <CustomButton content="Edit" cstyle={{backgroundColor: "#F4A15D", marginLeft: 5}}/>
            <CustomButton content="Delete" cstyle={{backgroundColor: "#F4A15D", marginLeft: 5}}/>
          </View>
        </View>
      </ImageBackground>
      <View style={{ backgroundColor: "#F7CBA8" }}>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text>{props.foodName} </Text>
          <Text>RM {props.foodPrice}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FoodItem;

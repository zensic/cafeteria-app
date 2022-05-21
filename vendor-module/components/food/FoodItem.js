import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const FoodItem = (props) => {
  return (
    <Pressable
      style={props.cstyle}
      onPress={() => {
        props.callback();
      }}
    >
      <Image style={{ height: 100, width: 100 }} source={{ uri: props.url }} />
      <View>
        <Text>{props.foodName}</Text>
        <Text>{props.foodPrice}</Text>
      </View>
    </Pressable>
  );
};

export default FoodItem;

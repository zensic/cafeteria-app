import { View, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = (props) => {
  return (
    <Pressable
      style={props.cstyle}
      onPress={() => {
        props.callback();
      }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>
        {props.content}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

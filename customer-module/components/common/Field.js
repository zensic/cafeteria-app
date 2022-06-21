import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import { accentColor } from "../../styles/styles";

const Field = (props) => {
  return (
    <View style={fieldStyles.field}>
      <Text style={fieldStyles.label}>{props.label}</Text>
      <TextInput
        style={fieldStyles.input}
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secure ? true : false}
        onChangeText={(text) => props.callback(text)}
      />
    </View>
  );
};

export default Field;

const fieldStyles = StyleSheet.create({
  field: {
    width: "100%",
    marginTop: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    marginTop: 5,
    padding: 10,
    backgroundColor: `${accentColor}`,
    borderRadius: 12
  }
});

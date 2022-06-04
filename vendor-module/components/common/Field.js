import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import { primaryColor, accentColor } from "../../styles/styles";

const Field = (props) => {
  return (
    <View style={styles.field}>
      <Text style={{ fontWeight: "bold" }}>{props.label}</Text>
      <TextInput
        style={{
          height: 40,
          padding: 10,
          backgroundColor: `${accentColor}`,
          borderRadius: 12
        }}
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secure ? true : false}
        onChangeText={(text) => props.callback(text)}
      />
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  field: {
    width: "100%",
    marginTop: 10,
  },
});

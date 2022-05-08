import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Field = (props) => {
  return (
    <View
      style={styles.field}
    >
      <Text>
        {props.label}
      </Text>
      <TextInput
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
    width: '100%',
    backgroundColor: 'red'
  }
});

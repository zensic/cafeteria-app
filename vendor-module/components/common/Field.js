import { Text, View, TextInput } from "react-native";
import React from "react";

import styles from "../../styles/styles";

const Field = (props) => {
  return (
    <View style={styles.field}>
      <View  style={styles.labelContainer}>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secure ? true : false}
        onChangeText={(text) => props.callback(text)}
      />
    </View>
  );
};

export default Field;

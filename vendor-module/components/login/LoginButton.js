import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "../../styles/styles";

const LoginButton = () => {
  const nav = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        nav.navigate("home");
      }}
    >
      <View>
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </View>
    </Pressable>
  );
};
export default LoginButton;

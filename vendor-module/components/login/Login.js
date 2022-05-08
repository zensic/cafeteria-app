import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import styles from "../../styles/styles.js";
import Field from "../common/Field.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Vendor Login</Text>
      <Field
        label={"Username"}
        value={email}
        placeholder={"Type your email here"}
        callback={setEmail}
      />
      <Field
        label={"Password"}
        value={password}
        secure={true}
        placeholder={"Type your password here"}
        callback={setPassword}
      />
      <LoginButton />
    </View>
  );
};

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

export default Login;

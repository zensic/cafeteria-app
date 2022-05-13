import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import styles from "../../styles/styles.js";
import Field from "../common/Field.js";
import LoginButton from "./LoginButton.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.layout}>
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
    </KeyboardAvoidingView>
  );
};

export default Login;

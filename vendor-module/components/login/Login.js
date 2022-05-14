import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { fbSignUp } from '../../firebase.js';

import styles from "../../styles/styles.js";
import Field from "../common/Field.js";
import LoginButton from "./LoginButton.js";
import RegisterButton from "./RegisterButton.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    fbSignUp(email, password);
  }

  return (
    <KeyboardAvoidingView style={styles.layout} behavior="padding">
      <View style={loginStyle.loginLayout}>
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
        <RegisterButton callback={handleSignUp}/>
      </View>
    </KeyboardAvoidingView>
  );
};

const loginStyle = StyleSheet.create({
  loginLayout: {
    width: "80%",
  },
});

export default Login;

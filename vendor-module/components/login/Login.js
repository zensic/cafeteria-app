import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, fbSignUp, fbSignIn } from "../../firebase.js";

import styles from "../../styles/styles.js";
import Field from "../common/Field.js";
import CustomButton from "../common/CustomButton.js";

const Login = () => {
  const nav = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        nav.replace("home");
      } else {
        // User is signed out
      }
    });
  });

  const handleSignUp = () => {
    fbSignUp(email, password);
  };

  const handleLogin = () => {
    fbSignIn(email, password);
  };

  return (
    <KeyboardAvoidingView style={styles.layout} behavior="padding">
      <View style={loginStyle.loginLayout}>
        <Text style={styles.title}>Vendor Login</Text>
        <Field
          label={"Username"}
          value={email}
          placeholder={"Enter your email here"}
          callback={setEmail}
        />
        <Field
          label={"Password"}
          value={password}
          secure={true}
          placeholder={"Enter your password here"}
          callback={setPassword}
        />
        <CustomButton callback={handleLogin} content={'Login'} cstyle={styles.button}/>
        <CustomButton callback={handleSignUp} content={'Register'} cstyle={styles.button}/>
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

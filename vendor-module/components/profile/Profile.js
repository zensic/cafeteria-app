import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase";
import CustomButton from "../common/CustomButton";
import styles from "../../styles/styles";

const Profile = () => {
  const nav = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out sucessful
        nav.replace("login");
      })
      .catch((error) => {
        // An error happened
        alert(error.message);
      });
  };

  return (
    <View>
      
      <CustomButton
        callback={handleSignOut}
        content={"Sign Out"}
        cstyle={styles.button}
      />
    </View>
  );
};

export default Profile;

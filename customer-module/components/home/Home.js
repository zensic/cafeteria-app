import { View, Text } from "react-native";
import React from "react";

import { auth } from '../../firebase';
import { signOut } from "firebase/auth";
import styles from "../../styles/styles";
import CustomButton from "../common/CustomButtom";

const Home = ({navigation}) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out sucessful
        navigation.replace("login");
      })
      .catch((error) => {
        // An error happened
        alert(error.message);
      });
  };

  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <CustomButton
        callback={handleSignOut}
        content={"Sign Out"}
        cstyle={styles.buttonSecondary}
      />
    </View>
  );
};

export default Home;

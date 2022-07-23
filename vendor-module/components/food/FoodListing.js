import React, { useEffect, useState } from "react";

import styles from "../../styles/styles.js";
import CustomButton from "../common/CustomButton";
import FoodItem from "./FoodItem.js";
import CenterWrapper from "../common/CenterWrapper.js";
import { ScrollView } from "react-native-gesture-handler";

import { auth, db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useIsFocused } from "@react-navigation/native";


const FoodListing = ({ navigation }) => {

  const [foodList, setFoodList] = useState(() => []);
  const isFocused = useIsFocused();

  useEffect(() => {
    getFoodList();
  }, [isFocused]);

  const getFoodList = async () => {
    const collectionRef = collection(db, "food");
    const queryRef = query(collectionRef, where("email", "==", auth.currentUser.email));
    const querySnapshot = await getDocs(queryRef);

    let foodTemp = [];
    querySnapshot.forEach((doc) => {
      foodTemp.push([doc.id, doc.data().url, doc.data().name, doc.data().price]);
    });
    setFoodList(foodTemp);
  }

  const handleCreateFood = () => {
    navigation.push("Food Creation");
  };

  return (
    <CenterWrapper>
      <ScrollView>
        <CustomButton
          callback={handleCreateFood}
          content={"Create New Food"}
          cstyle={styles.button}
        />
        {foodList.map((foodItem) => (
          <FoodItem
            key={foodItem[0]}
            url={foodItem[1]}
            foodName={foodItem[2]}
            foodPrice={foodItem[3]}
          />
        ))}
      </ScrollView>
    </CenterWrapper>
  );
};

export default FoodListing;

const data = {
  food: [
    {
      id: 1,
      name: "Fried rice",
      price: 4.99,
      url: "",
    },
    {
      id: 2,
      name: "Chicken rice",
      price: 5.99,
      url: "",
    },
    {
      id: 3,
      name: "Nasi lemak",
      price: 6,
      url: "",
    },
    {
      id: 4,
      name: "Roti canai",
      price: 3.99,
      url: "",
    },
  ],
};

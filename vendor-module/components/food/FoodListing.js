import React, { useEffect, useState } from "react";

import styles from "../../styles/styles.js";
import CustomButton from "../common/CustomButton";
import FoodItem from "./FoodItem.js";
import CenterWrapper from "../common/CenterWrapper.js";
import { ScrollView } from "react-native-gesture-handler";

import { auth, db, storage } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const FoodListing = ({ navigation }) => {

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    console.log("Use Effect Called");
    getFoodList();
  }, []);

  const getFoodList = async () => {
    console.log("break 1");
    const collectionRef = collection(db, "food");
    console.log("break 2");
    const queryRef = query(collectionRef, where("email", "==", auth.currentUser.email));
    console.log("break 3");
    const querySnapshot = await getDocs(queryRef);
    console.log("break 4");

    const foodTemp = [];
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      //console.log(doc.id, " => ", doc.data());
      foodTemp.push([doc.id, doc.data()]);
    });
    setFoodList(foodTemp);
    console.log(foodList);
  }

  const handleCreateFood = () => {
    navigation.navigate("Food Creation");
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
            image={foodItem[1].url}
            foodName={foodItem[1].name}
            foodPrice={foodItem[1].price}
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

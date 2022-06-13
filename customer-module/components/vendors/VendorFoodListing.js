import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "../../styles/styles";
import CenterWrapper from "../common/CenterWrapper";
import VendorFoodItem from "./VendorFoodItem";
import SearchBar from "../common/SearchBar";

const VendorFoodListing = ({ route }) => {
  const { vendorName, vendorRating } = route.params;

  return (
    <ScrollView>
      <Image
        style={styles.foodBannerImage}
        source={require("../../assets/images/food-1.jpg")}
      />
      <CenterWrapper>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginVertical: 10 }}>
          {vendorName}
        </Text>
        <SearchBar  placeholder="Search food name.." />
        {data.food.map((item) => (
          <VendorFoodItem
            key={item.id}
            image={item.url}
            foodName={item.name}
            foodPrice={item.price.toFixed(2)}
            foodRating={item.rating.toFixed(1)}
          />
        ))}
      </CenterWrapper>
    </ScrollView>
  );
};

export default VendorFoodListing;

const data = {
  food: [
    {
      id: 1,
      name: "Fried rice",
      price: 4.99,
      rating: 4.1,
      url: "",
    },
    {
      id: 2,
      name: "Chicken rice",
      price: 5.99,
      rating: 4.4,
      url: "",
    },
    {
      id: 3,
      name: "Nasi lemak",
      price: 6,
      rating: 4.8,
      url: "",
    },
    {
      id: 4,
      name: "Roti canai",
      price: 3.99,
      rating: 4.5,
      url: "",
    },
  ],
};

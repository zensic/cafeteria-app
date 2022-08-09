import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { getFoodList } from "../../../firebase.js";
import styles, { primaryColor }  from "../../../styles/styles.js";
import CenterWrapper from "../../common/CenterWrapper.js";
import FoodItem from "./FoodItem.js";
import SearchBar from "../../common/SearchBar.js";
import UserContext from "../UserContext.js";

const FoodListing = ({ route }) => {
  const { vendorId, vendorName, vendorRating, vendorUrl } = route.params;
  const [foodList, setFoodList] = useState(() => []);

  useEffect(() => {
    getFoodList(vendorId, setFoodList);
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.foodBannerImage}
        source={
          !vendorUrl || vendorUrl == ""
            ? require("../../../assets/images/food-1.jpg")
            : { uri: vendorUrl }
        }
      />
      <CenterWrapper>
        <View style={vendorFoodListingStyle.titleContainer}>
          <Text style={vendorFoodListingStyle.title}>{vendorName}</Text>
          {/* <Text style={vendorFoodListingStyle.title}>
            {vendorRating}{" "}
            <FontAwesome name="star" size={16} color={primaryColor} />
          </Text> */}
        </View>
        <SearchBar placeholder="Search food name.." />
        <UserContext.Provider value={vendorId}>
          {foodList.map((item) => (
            <FoodItem
              key={item[0]}
              foodId={item[0]}
              url={item[1]}
              foodName={item[2]}
              foodPrice={item[3]}
              foodRating="5.0"
            />
          ))}
        </UserContext.Provider>
      </CenterWrapper>
    </ScrollView>
  );
};

export default FoodListing;

const vendorFoodListingStyle = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

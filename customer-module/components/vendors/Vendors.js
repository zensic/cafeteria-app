import { View, Text } from "react-native";
import React from "react";

import CenterWrapper from "../common/CenterWrapper.js";
import SearchBar from "../common/SearchBar.js";
import { ScrollView } from "react-native-gesture-handler";

const Vendors = () => {
  return (
    <CenterWrapper>
      <ScrollView>
        <SearchBar placeholder="Search vendor name.." />
        {data.vendors.map((vendor) => (
          <
        ))}
      </ScrollView>
    </CenterWrapper>
  );
};

export default Vendors;

const data = {
  vendors: [
    {
      id: 1,
      name: "Ali's Roti Canai",
      rating: 4.5,
      url: "",
    },
    {
      id: 2,
      name: "Sentuckty Fried Chicken",
      rating: 4.1,
      url: "",
    },
    {
      id: 3,
      name: "Hawaii Fried Rice",
      rating: 4.9,
      url: "",
    },
  ],
};
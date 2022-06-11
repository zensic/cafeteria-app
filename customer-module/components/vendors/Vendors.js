import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import CenterWrapper from "../common/CenterWrapper.js";
import SearchBar from "../common/SearchBar.js";
import VendorItem from "../vendors/VendorItem.js"


const Vendors = () => {
  return (
    <CenterWrapper>
      <ScrollView>
        <SearchBar placeholder="Search vendor name.." />
        {data.vendors.map((vendor) => (
          <VendorItem 
            key={vendor.id}
            name={vendor.name}
            rating={vendor.rating}
            desc={vendor.desc}
          />
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
      desc: "Indian cuisine",
      url: "",
    },
    {
      id: 2,
      name: "Sentucky Fried Chicken",
      rating: 4.1,
      desc: "Fried food",
      url: "",
    },
    {
      id: 3,
      name: "Hawaii Fried Rice",
      rating: 4.9,
      desc: "Rice dishes",
      url: "",
    },
  ],
};
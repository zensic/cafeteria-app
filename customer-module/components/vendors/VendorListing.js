import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { getVendorList } from "../../firebase.js";

import CenterWrapper from "../common/CenterWrapper.js";
import SearchBar from "../common/SearchBar.js";
import VendorItem from "../vendors/VendorItem.js"

const VendorListing = () => {

  const [vendorList, setVendorList] = useState(() => []);
  const isFocused = useIsFocused();

  useEffect(() => {
    getVendorList(setVendorList);
  }, [isFocused])

  return (
    <CenterWrapper>
      <ScrollView>
        <SearchBar placeholder="Search vendor name.." />
        {vendorList.map((vendor) => (
          <VendorItem 
            key={vendor[0]}
            id={vendor[0]}
            url={vendor[1]}
            name={vendor[2]}
            desc={vendor[3]}
            rating="5.0"
          />
        ))}
      </ScrollView>
    </CenterWrapper>
  )
}

export default VendorListing
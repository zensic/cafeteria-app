import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { primaryColor, secondaryColor, accentColor } from "../../styles/styles";

const SearchBar = (props) => {
  return (
    <View style={searchStyle.searchBar}>
      <AntDesign name="search1" size={24} color={primaryColor} />
      <TextInput
        style={searchStyle.searchBarText}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text) => props.callback(text)}
      />
    </View>
  );
};

export default SearchBar;

const searchStyle = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginTop: 5,
    borderRadius: 12,
    backgroundColor: `${accentColor}`,
  },
  searchBarText: {
    marginLeft: 10,
  },
});

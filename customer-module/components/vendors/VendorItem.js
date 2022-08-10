import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fbGetDownloadURL } from "../../firebase";

const VendorItem = (props) => {
  const nav = useNavigation();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fbGetDownloadURL(props.url, setImageUrl);
  }, []);

  const handlePress = () => {
    nav.navigate("Food Listing", {
      vendorId: props.id,
      vendorName: props.name,
      vendorRating: props.rating,
      vendorUrl: imageUrl
    });
  };

  return (
    <Pressable style={vendorItemStyle.container} onPress={handlePress}>
      <Image
        style={vendorItemStyle.image}
        source={
          !imageUrl || imageUrl == ""
            ? require("../../assets/images/no-image.jpg")
            : { uri: imageUrl }
        }
      />
      <View style={vendorItemStyle.textContainer}>
        <Text style={vendorItemStyle.text}>{props.name}</Text>
        {/* <Text style={vendorItemStyle.text}>
          {props.rating}{" "}
          <FontAwesome name="star" size={16} color={primaryColor} />
        </Text> */}
      </View>
      <Text>{props.desc}</Text>
    </Pressable>
  );
};

export default VendorItem;

const vendorItemStyle = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  image: {
    height: 150,
    width: "100%",
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
  },
});

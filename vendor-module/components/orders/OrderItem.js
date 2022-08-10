import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { fbGetDownloadURL } from "../../firebase";

const OrderItem = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fbGetDownloadURL(props.url, setImageUrl);
  }, []);

  return (
    <Pressable
      style={props.cstyle}
      onPress={() => {
        props.callback();
      }}
      key={props.id}
    >
      <Image
        style={orderStyle.orderImage}
        source={
          !imageUrl || imageUrl == ""
            ? require("../../assets/images/no-image.jpg")
            : { uri: imageUrl }
        }
      />
      <View style={{ marginLeft: 10 }}>
        <Text>ID #{props.id}</Text>
        <Text>{props.location}</Text>
        <Text>{`${props.name} x${props.quantity} RM${props.price*props.quantity}`}</Text>
        <Text>{props.createdAt}</Text>
      </View>
    </Pressable>
  );
};

const orderStyle = StyleSheet.create({
  orderImage: {
    height: 100,
    width: 100,
    borderRadius: 12,
  }
});


export default OrderItem;
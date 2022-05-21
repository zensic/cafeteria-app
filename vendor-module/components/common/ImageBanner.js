import { View, Text, Image } from "react-native";
import React from "react";

import styles from "../../styles/styles";

const ImageBanner = (props) => {
  return <Image style={styles.banner} source={{ uri: props.url }} />;
};

export default ImageBanner;

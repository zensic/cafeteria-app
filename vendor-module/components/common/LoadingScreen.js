import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

const LoadingScreen = (props) => {
  if (props.visible)
    return (
      <View style={loadingStyle.loading}>
        <ActivityIndicator size="large" />
        <Text style={loadingStyle.loadingText}>Loading</Text>
      </View>
    );

  return <></>;
};

const loadingStyle = StyleSheet.create({
  loading: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  loadingText: {
    color: "white",
    fontSize: 18,
  },
});

export default LoadingScreen;

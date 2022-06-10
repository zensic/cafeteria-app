import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <Pressable
      style={props.cstyle}
      onPress={() => {
        props.callback();
      }}
    >
      <View>
        <Text style={{ color: "white", textAlign: "center" }}>{props.content}</Text>
      </View>
    </Pressable>
  )
}

export default CustomButton
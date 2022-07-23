import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../styles/styles'
import CenterWrapper from '../common/CenterWrapper'

const FoodDetails = ({route}) => {

  const {foodName, foodPrice, foodUrl} = route.params;

  return (
    <View>
      <Image
        style={styles.foodBannerImage}
        source={
          foodUrl
              ? { uri: foodUrl }
              : require("../../assets/images/upload-food.jpg")
          }
      />
      <CenterWrapper>
        <Text>{foodName}</Text>
        <Text>RM {foodPrice}</Text>
      </CenterWrapper>
    </View>
  )
}

export default FoodDetails
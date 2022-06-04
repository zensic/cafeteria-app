import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../styles/styles'

const OrderField = (props) => {
  return (
    <View>
      <Text style={styles.orderLabel}>{props.orderLabel}</Text>
      <Text style={styles.orderValue}>{props.orderValue}</Text>
    </View>
  )
}

export default OrderField
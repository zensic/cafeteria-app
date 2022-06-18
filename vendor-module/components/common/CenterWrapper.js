import { View } from 'react-native'
import React from 'react'

const CenterWrapper = ({children}) => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View style={{ width: "95%" }}>
        {children}
      </View>
    </View>
  )
}

export default CenterWrapper

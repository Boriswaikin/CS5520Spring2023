//Type rnfe
import { View, Text } from 'react-native'
import React from 'react'

const Header = ({appName}) => {
  return (
    <View>
      <Text>Welcome to {appName} </Text>
    </View>
  )
    //console.log(appName);
}

export default Header
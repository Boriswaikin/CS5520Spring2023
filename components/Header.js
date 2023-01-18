//Type rnfe
import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View>
      <Text>Welcome to {props.name} </Text>
    </View>
  )
   // console.log(props);
}

export default Header
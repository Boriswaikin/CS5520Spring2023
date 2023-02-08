//Type rnfe
import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Header = ({name}) => {
  return (
    <View style = {styles.Header}>
      <Text 
       style={{color:'rebeccapurple'}}>Welcome to {name} </Text>
    </View>
  )
    //console.log(appName);
}

const styles = StyleSheet.create({
  Header :{
    borderWidth:1,
    borderColor:'rebeccapurple',
  }
});

export default Header
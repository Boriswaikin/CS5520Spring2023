import { View, TextInput} from 'react-native'
import { useState } from 'react';
import React from 'react'

const Input = ({sendChangedText}) => {
    const [text,setText] = useState();
    function changeTextHandler(changedText){
      setText(changedText);
      sendChangedText(changedText);
    }
  return (
    <View>
      <TextInput 
      value={text}
      onChangeText={changeTextHandler}
      style = {{backgroundColor : "red"}}/>
    </View>
  )
}

export default Input
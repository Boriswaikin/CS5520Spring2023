import { View, TextInput,Button} from 'react-native'
import { useState } from 'react';
import React from 'react'

const Input = ({sendChangedText}) => {
    const [text,setText] = useState();
    function changeTextHandler(changedText){
      setText(changedText);
      //sendChangedText(changedText);
    }
  return (
    <View>
      <TextInput 
      value={text}
      onChangeText={changeTextHandler}
      style = {{backgroundColor : "red"}}/>
      <Button title="Confirm"
      onPress={()=>{
        sendChangedText(text);
        setText("");
      }}/>
    </View>
  )
}

export default Input
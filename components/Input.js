import { View, TextInput,Button, Modal,Image, StyleSheet} from 'react-native'
import { useState } from 'react';
import React from 'react'

const Input = ({sendChangedText,modalvisible,CancelPressed}) => {
    const [text,setText] = useState();
   
    function changeTextHandler(changedText){
      setText(changedText);
      //sendChangedText(changedText);
    }
  return (
    <Modal
      visible = {modalvisible}>
    <View >
      <TextInput 
      value={text}
      onChangeText={changeTextHandler}
      style = {{color:'purple'}}/>
      <Button title="Confirm"
      onPress={()=>{
        sendChangedText(text);
        setText("");
      }}/>
      <Button title="Cancel"
      onPress={()=>{
        CancelPressed(false);
      }}/>
      <Image
        style={{ width: 150, height: 150 }}
        source={{ uri: `https://cdn-icons-png.flaticon.com/512/2617/2617812.png` }}
        />
      <Image
        style={{ width: 150, height: 150 }}
        source={require('../image/image.png')}
        />
    </View>
    </Modal>
  )
}
export default Input
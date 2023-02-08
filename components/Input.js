import { View, TextInput,Button, Modal,Image, StyleSheet, Text} from 'react-native'
import { useState } from 'react';
import React from 'react'

const Input = ({sendChangedText,modalvisible,CancelPressed}) => {
    const [text,setText] = useState();
   
    function changeTextHandler(changedText){
      setText(changedText);
      // sendChangedText(changedText);
    }
  return (
    <Modal
      visible = {modalvisible}>
    <View style = {styles.container}>
    <Image
        style={{ width: 150, height: 150 }}
        source={{ uri: `https://cdn-icons-png.flaticon.com/512/2617/2617812.png` }}
        />
      <Image
        style={{ width: 150, height: 150 }}
        source={require('../image/image.png')}
        />
      <TextInput 
      value={text}
      onChangeText={changeTextHandler}
      style = {{color:'purple',borderBottomColor:'black',borderBottomWidth:1,width:200}}/>
      <View style = {styles.buttonContainer}>
        <View style= {styles.button}>
          <Button 
          title="Confirm"
          onPress={()=>{
            sendChangedText(text);
            setText("");
          }}/>
      </View>
        <View style= {styles.button}>
          <Button title="Cancel"
          onPress={()=>{
            CancelPressed(false);
          }}/>
        </View>
      </View>
    </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flexDirection: 'row'
  },
  button : {
    marginHorizontal:10,
    width:"30%"}
});
export default Input
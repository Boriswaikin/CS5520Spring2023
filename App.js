import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { Text, View, Image, TextInput,Button,StyleSheet} from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const name = "my awesome app"; 
  const [enteredText,sendChangedText] = useState();
  const [modalvisible, setModalVisible] = useState(false);

  function onCancel(status){
    setModalVisible(status)
  }

  return (
    <View style = {styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Header name = {name} />
      <Input 
        modalvisible={modalvisible}
        sendChangedText = {sendChangedText}
        CancelPressed = {onCancel}/>
      <Button 
      title = "Add a Task"
      onPress={()=>{
        setModalVisible(true);
      }}/>
      <Text> {enteredText} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { StyleSheet, Text, View, Image, TextInput,Button} from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const name = "my awesome app"; 
  const [enteredText,sendChangedText] = useState();



  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Header name = {name} />
      <Input sendChangedText = {sendChangedText}/>
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

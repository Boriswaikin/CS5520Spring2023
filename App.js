import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { Text, View, Image, TextInput,Button,StyleSheet,SafteAreaView, ScrollView, FlatList} from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import GoalItem from './components/GoalItem';

export default function App() {
  const name = "my awesome app"; 
  // const [enteredText,OnTextEntered] = useState("Your goals will appear here");
  const [goals,setGoals] = useState([]);
  const [modalvisible, setModalVisible] = useState(false);

  function onCancel(status){
    setModalVisible(status)
  }

  function OnTextEntered(changedText){
    const newGoal = {text:changedText,id:Math.random()};
    setGoals((prevGoals)=>{
      return [...prevGoals,newGoal]});
    setModalVisible(false);
  }

  function onDeletePressed(deletedId){
    //  console.log("It is pressed",deletedId);
    let newArray = goals.filter((goal)=>{
      return goal.id!=deletedId;})
    // console.log(newArray);
    setGoals(newArray);
  }

  return (
    <View style = {styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <View style = {styles.topContainer}>
        <Header name = {name} />
        <Button 
        title = "Add a Task"
        onPress={()=>{
          setModalVisible(true);
        }}/>
        </View>
        <Input 
        modalvisible={modalvisible}
        sendChangedText = {OnTextEntered}
        CancelPressed = {onCancel}/>
        <View style={styles.bottomContaineer}>
          <FlatList
            contentContainerStyle = {styles.contentContainerStyle}
            data = {goals}
            renderItem={({item})=>{
              // console.log(element.item)
             return <GoalItem goal = {item} onDelete={onDeletePressed}/> 
            }}/>
          {/* <ScrollView contentContainerStyle = {styles.contentContainerStyle}>
          {goals.map((goal)=>{return (
              <View key={goal.id} style= {styles.textContainer}>
              <Text Style={styles.text}>{goal.text}</Text>
              </View>
              );
            })}
            </ScrollView> */}
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
  },
  bottomContaineer : {
    flex:4,
    backgroundColor: '#dcd',
    alignSelf:'stretch'
  },
  text:{
    color:"#4510ff",
    fontSize:18,
  },
  textContainer:{
    borderRadius:5,
    backgroundColor:'#888',
    marginVertical:15,
    flexDirection:"row",
    alignItems:'center',
    padding:15,
  },
  contentContainerStyle:{
    alignItems:'center'
  }
});

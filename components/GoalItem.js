import { View, Text,StyleSheet, Button } from 'react-native';
import React from 'react';

export default function GoalItem ({goal,onDelete}) {
    return (
    <View style= {styles.textContainer}>
        <Text Style={styles.text}>{goal.text}</Text>
        <Button
            title="X"
            onPress={()=>{onDelete(goal.id)}}
            color="black"/>
    </View>
    )
}

const styles = StyleSheet.create({text:{
    Color:'purple',
    padding:15,
  },
  textContainer:{
    padding:5,
  },
})
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import styles from "./styles";
let i = 0;

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  const addGoalHandler = () => {
    // console.log(courseGoals);
    i++;
    setCourseGoals([...courseGoals, { key: i.toString(), value: enteredGoal }]);
  };
  return (
    <View style={styles.root}>
      <Text>Enter Your Goal</Text>
      <View style={styles.container}>
        <TextInput
          placeholder='Dream on...'
          style={styles.goalInputBox}
          onChangeText={goalInputHandler}
        />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.goals}>
            <Text style={styles.goalsFont}>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

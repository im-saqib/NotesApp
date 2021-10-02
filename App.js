import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";

import NotesItem from "./components/NotesItem";
import NotesInput from "./components/NotesInput";

import styles from "./styles";
let i = 0;

export default function App() {
  const [enteredNote, setEnteredNote] = useState("");
  const [courseNotes, setCourseNotes] = useState([]);
  function noteInputHandler(enteredText) {
    setEnteredNote(enteredText);
  }
  const addNoteHandler = () => {
    setCourseNotes([...courseNotes, { key: i.toString(), value: enteredNote }]);
    i++;
  };
  const removeNote = (index) => {
    const ar = courseNotes.filter((ele) => ele.key != index);
    setCourseNotes(ar);
  };
  return (
    <View style={styles.root}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Notes</Text>
      </View>
      <NotesInput
        noteInputHandler={noteInputHandler}
        addNoteHandler={addNoteHandler}
      />
      <FlatList
        data={courseNotes}
        renderItem={(itemData) => (
          <NotesItem itemData={itemData} removeNote={removeNote} />
        )}
      />
    </View>
  );
}

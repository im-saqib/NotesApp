import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, FlatList, Modal, Button } from "react-native";

import NotesItem from "./components/NotesItem";
import NotesInput from "./components/NotesInput";

import styles from "./styles";
let i = 0;

export default function App() {
  const [enteredNote, setEnteredNote] = useState("");
  const [courseNotes, setCourseNotes] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  function noteInputHandler(enteredText) {
    setEnteredNote(enteredText);
  }
  const addNoteHandler = () => {
    if (enteredNote == "") {
      setIsAddMode(false);
    } else {
      setCourseNotes([
        ...courseNotes,
        { key: i.toString(), value: enteredNote },
      ]);
      setEnteredNote("");
      closeModal();
      i++;
    }
  };
  const removeNote = (index) => {
    const ar = courseNotes.filter((ele) => ele.key != index);
    setCourseNotes(ar);
  };
  const closeModal = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.root}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Notes App</Text>
      </View>
      <Button title='Add new note' onPress={() => setIsAddMode(true)} />
      <NotesInput
        noteInputHandler={noteInputHandler}
        addNoteHandler={addNoteHandler}
        visible={isAddMode}
        close={closeModal}
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

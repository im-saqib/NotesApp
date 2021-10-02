import React from "react";
import {
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import styles from "../styles";

const NotesInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Type here'
        style={styles.noteInputBox}
        onChangeText={props.noteInputHandler}
      />
      <Button title='Add' color='#A2416B' onPress={props.addNoteHandler} />
    </View>
  );
};

export default NotesInput;

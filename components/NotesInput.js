import React from "react";
import { View, TextInput, Button, Modal } from "react-native";

import styles from "../styles";

const NotesInput = (props) => {
  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      onRequestClose={props.close}
    >
      <View style={styles.container}>
        <TextInput
          placeholder='Type here'
          style={styles.noteInputBox}
          onChangeText={props.noteInputHandler}
        />
        <View style={styles.addCloseBtn}>
          <Button
            title='Add New'
            color='#6ECB63'
            onPress={props.addNoteHandler}
          />
          <Button title='Cancel' color='red' onPress={props.close} />
        </View>
      </View>
    </Modal>
  );
};

export default NotesInput;

import React from "react";
import { View, Text, TouchableOpacity, PickerIOSComponent } from "react-native";

import styles from "../styles";

const NotesItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.removeNote(props.itemData.item.key);
      }}
    >
      <View style={styles.notes}>
        <Text style={styles.notesFont}>{props.itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotesItem;

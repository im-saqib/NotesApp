import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 40,
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    alignItems: "center",
  },
  headingText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#A2416B",
  },
  noteInputBox: {
    paddingTop: 5,
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  notes: {
    backgroundColor: "#A2416B",
    alignItems: "center",
    marginVertical: 5,
    paddingVertical: 5,
  },
  notesFont: {
    fontSize: 20,
    color: "#fff",
  },
});

export default styles;

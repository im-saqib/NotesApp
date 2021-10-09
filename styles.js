import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 40,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    alignItems: "center",
    borderBottomWidth: 2,
    marginBottom: 10,
    borderBottomColor: "blue",
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
  addCloseBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "60%",
  },
});

export default styles;

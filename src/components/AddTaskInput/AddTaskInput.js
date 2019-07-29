import React, { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, TextInput, Button } from "react-native";

import { addTask } from "../../store/actions/index";

const AddTaskInput = ({ addTask }) => {
  const [valueInput, setValueInput] = useState("");

  const onTextChange = inputText => {
    setValueInput(inputText);
  };

  const onAddTask = () => {
    addTask(valueInput);
    onTextChange("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onTextChange}
        value={valueInput}
        style={styles.text}
        placeholder="Put task here"
      />
      <Button title="Add task" style={styles.button} onPress={onAddTask} />
    </View>
  );
};

const mapStateToProps = ({ tasks }) => tasks;

const mapDispatchToProps = {
  addTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskInput);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginLeft: 16,
    marginRight: 16
  },
  button: {
    width: "25%",
    marginLeft: "auto",
    backgroundColor: "#fff",
    borderRadius: 0,
    color: "#333"
  },
  text: {
    height: 40,
    borderColor: "#ddd",
    borderStyle: "solid",
    borderWidth: 2,
    width: "70%",
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 18
  }
});

import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { deleteTask } from "../../store/actions";

const TasksList = ({ deleteTask, tasks }) => {
  return (
    <View style={styles.listWrapper}>
      <View style={styles.tasksWrapper}>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task, index) => (
            <TouchableOpacity onPress={() => deleteTask(task)} key={index}>
              <View style={styles.singleTaskWrapper}>
                <Text style={styles.singleTask}>{task}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const mapStateToProps = ({ tasks }) => tasks;
const mapDispatchToProps = {
  deleteTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);

const styles = StyleSheet.create({
  listWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32
  },
  tasksWrapper: {
    width: "90%"
  },
  singleTaskWrapper: {
    display: "flex",
    marginBottom: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.82,
    elevation: 3
  },
  singleTask: {
    fontSize: 20,
    color: "#333",
    textAlign: "left",
    padding: 8
  }
});

import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";

import { deleteTask } from "../../store/actions";

const TasksList = ({ deleteTask, tasks }) => {
  return (
    <View style={styles.listWrapper}>
      <View style={styles.tasksWrapper}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => deleteTask(item.text)}>
              <View style={styles.singleTaskWrapper}>
                <Text style={styles.singleTask}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
    marginTop: 32,
    padding: 4
  },
  tasksWrapper: {
    width: "90%"
  },
  singleTaskWrapper: {
    display: "flex",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5
  },
  singleTask: {
    fontSize: 20,
    color: "#333",
    textAlign: "left",
    padding: 8
  }
});

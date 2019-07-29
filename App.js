import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/configureStore";

import AddTaskInput from "./src/components/AddTaskInput/AddTaskInput";
import TasksLists from "./src/components/TasksLists/TasksList";

export default function App() {
  return (
    <Provider store={store}>
      <AddTaskInput />
      <TasksLists />
    </Provider>
  );
}

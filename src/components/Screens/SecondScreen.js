import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import TasksLists from "../TasksLists/TasksList";

const SecondScreen = props => {
  console.log(props.navigation.getParam("itemId"));
  return <TasksLists />;
};

SecondScreen.navigationOptions = {
  tabBarIcon: <Icon name="facebook" size={30} color="#333" />
};

export default SecondScreen;

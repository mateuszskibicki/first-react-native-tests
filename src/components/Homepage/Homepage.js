import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AddTaskInput from "../AddTaskInput/AddTaskInput";

const HomepageScreen = ({ navigation }) => {
  return (
    <>
      <AddTaskInput />
    </>
  );
};

HomepageScreen.navigationOptions = {
  tabBarIcon: <Icon name="rocket" size={30} color="#333" />
};

export default HomepageScreen;

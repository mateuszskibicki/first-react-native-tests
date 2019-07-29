import React from "react";
import { Provider } from "react-redux";
import { Button } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import store from "./src/store/configureStore";

import Navigation from "./src/components/layout/Navigation";
import AddTaskInput from "./src/components/AddTaskInput/AddTaskInput";
import TasksLists from "./src/components/TasksLists/TasksList";

class HomepageScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <>
        <Navigation navigation={this.props.navigation} />
        <AddTaskInput />
        <TasksLists />
      </>
    );
  }
}

const SecondScreen = () => <TasksLists />;

SecondScreen.navigationOptions = {
  title: "asdasdasdda"
};

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomepageScreen,
//     SecondScreen: SecondScreen
//   },
//   {
//     initialRouteName: "Home",
//     /* The header config from HomeScreen is now here */
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "#f4511e"
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold"
//       }
//     }
//   }
// );

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomepageScreen,
    SecondScreen: SecondScreen
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

import React from "react";
import { Provider } from "react-redux";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
//redux store
import store from "./src/store/configureStore";

//screens
import Homepage from "./src/components/Homepage/Homepage";
import SecondScreen from "./src/components/Screens/SecondScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Home: Homepage,
    SecondScreen: SecondScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      tabBarOptions: {
        showLabel: false,
        activeBackgroundColor: "#f5f5f5",
        style: {
          height: 40,
          borderTop: "none",
          borderTopColor: "#ddd",
          borderTopWidth: 0
        },
        tabStyle: {
          borderRadius: 100,
          width: 150
        },
        keyboardHidesTabBar: false
      }
    }
  }
);

//app container with bottom navbar
const AppContainer = createAppContainer(TabNavigator);

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

import React, { Component } from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import GuestScreen from "./src/screens/GuestScreen";
import AdminScreen from "./src/screens/AdminScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import store from "./store";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Guest: GuestScreen,
    Admin: AdminScreen,
    Dashboard: DashboardScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "DJukebox",
    },
  }
);

const AppContainer = createAppContainer(navigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

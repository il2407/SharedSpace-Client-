import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Stack = createStackNavigator();
Stack.Navigator;

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

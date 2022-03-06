import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import Register from "./components/Register";

// create a stack navigator using the createStackNavigator() method
// it provides a way for app to transition between screens where each screen is on top of a stack
const Stack = createStackNavigator();

const App = () => {
  // console.log(Stack); -> I used this to check if stack is downloaded because at first I had too many errors
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3740FE",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Register" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React, { useState } from "react";
import firebase from "../database/firebase";
import { auth } from "../database/firebase";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";

export default function Login({ navigation }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const updateInputVal = (value, prop) => {
    const logState = login;
    logState[prop] = value;
    setLogin({ ...logState });
  };

  const userLogin = () => {
    if (login.email === "" && login.password === "") {
      Alert.alert("Enter email and password to login!");
    } else {
      setLogin({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(login.email, login.password)
        .then((res) => {
          console.log(res);
          console.log("User logged-in successfully!");
          setLogin({
            isLoading: false,
            email: "",
            password: "",
          });
          navigation.navigate("Dashboard");
        })
        .catch((error) => setLogin({ errorMessage: error.message }));
    }
  };

  if (login.isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={login.email}
          onChangeText={(val) => updateInputVal(val, "email")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={login.password}
          onChangeText={(val) => updateInputVal(val, "password")}
          maxLength={30}
          secureTextEntry={true}
        />
        <Button color="#3740FE" title="Login" onPress={userLogin} />
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate("Register")}
        >
          Don't have account? Click here to register
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#3740FE",
    marginTop: 25,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

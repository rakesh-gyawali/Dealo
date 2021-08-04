import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        icon="email"
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
        icon="lock"
        secureTextEntry
        placeholder="Password"
        textContentType="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;

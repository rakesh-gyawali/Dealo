import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppButton title="Login" onPress={() => console.log("Tapped")} />
    </View>
  );
}

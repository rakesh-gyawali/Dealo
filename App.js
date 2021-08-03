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
import AppText from "./app/comoponents/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View>
      <MaterialCommunityIcons name="email" size={200} />
      <AppText>Hello this is AppText</AppText>
    </View>
  );
}

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: landscape ? "100%" : "30%",
  },
  view: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "30%",
  },
});

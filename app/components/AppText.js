import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
//encapsulating the style for other texts ....
// for this need to pass "children in between the text"
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;

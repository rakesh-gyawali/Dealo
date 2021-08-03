import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
//encapsulating the style for other texts ....
// for this need to pass "children in between the text"
function AppText({ children }) {
  return <Text style={styles.text}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;

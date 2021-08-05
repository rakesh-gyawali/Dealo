import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";
//created to whether return error message or not ...
//Here, visible becomes true if the inputTextField is touched
export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

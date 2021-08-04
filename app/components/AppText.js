import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";
//encapsulating the style for other texts ....
// for this need to pass "children in between the text"
//style objects are in array to override the style when used in other components ...
function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;

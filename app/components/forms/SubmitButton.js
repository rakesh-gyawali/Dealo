import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
//As onPress={handleSubmit} was going to be repeated everywhere, it has been encapsulated to reduce code complexity ...
function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;

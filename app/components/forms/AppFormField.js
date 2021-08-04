import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";
//Formik is used to simplify handling form data without useing react hooks ...
//created to encapsulate AppTextInput common properties e.g. onBlur and onChangeText ...
//Assume this is AppTextInput with onChangeText to  validation mesaage ...

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

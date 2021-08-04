import React from "react";
import { Formik } from "formik";

//created to remove ugly code form of formik ...
//assume this is formik. Formik can handle state of the userinput values, handle submit
//event and integrate with Yup to validate input ....
function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;

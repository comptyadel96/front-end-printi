import React from "react"
import { useFormikContext } from "formik"

import AppTextInput from "./AppTextInput"
import AppFormError from "./AppFormError"
function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext()
  return (
    <>
      <AppTextInput
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <AppFormError errors={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField

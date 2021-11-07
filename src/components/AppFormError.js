import React from "react"

function AppFormError({ errors, visible }) {
  if (!errors || !visible) return null
  return <p className="text-red-700 font-semibold text-center">{errors}</p>
}

export default AppFormError

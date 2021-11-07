import React from "react"

function CustomBorder({
  width = "8px",
  height = "100px",
  color = "red",
  ...otherProps
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        ...otherProps,
      }}
    ></div>
  )
}

export default CustomBorder

import React from "react"

function AppTextInput({ placeholder, ...otherProps }) {
  return (
    <div className="bg-white w-52 rounded-lg mx-3  border-2 p-1 border-gray-300 my-2 md:w-96">
      <input
        placeholder={placeholder}
        autoCapitalize="none"
        {...otherProps}
        className="h-full w-full p-2 focus:outline-none"
        
      />
    </div>
  )
}

export default AppTextInput

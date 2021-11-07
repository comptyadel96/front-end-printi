import React from "react"
import { useFormikContext } from "formik"

function ButtonSubmit({ title = "S'inscrire" }) {
  const { handleSubmit } = useFormikContext()
  return (
    <button type="submit" onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-900 px-5 py-2 mt-3 rounded-full">
      <p className="text-white font-semibold ">{title} </p>
    </button>
  )
}

export default ButtonSubmit

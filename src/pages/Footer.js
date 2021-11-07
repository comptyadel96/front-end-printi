import React from "react"

function Footer() {
  return (
    <div className="w-screen h-52 flex items-center justify-evenly flex-wrap bg-purple-900 mt-3 md:justify-around ">
        <h1 className="self-start  mt-1 text-4xl md:text-7xl font-extrabold text-yellow-500 " >Printi</h1>
      <p className="text-xl text-white font-semibold mx-2">
        email : printi-dz@gmail.com
      </p>
      <p className="text-xl text-white font-semibold mx-2">
        Téléphone: +213 661558214
      </p>
      <p className="text-xl text-white font-semibold mx-2">
        Adresse : beni tamou blida 09 rue Tef ...
      </p>
      <h1 className="self-end text-2xl text-gray-400 mb-1 md:text-center">Printi © 2021 </h1>
    </div>
  )
}

export default Footer

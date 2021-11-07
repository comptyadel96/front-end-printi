import React from "react"
import { GiFallingStar } from "react-icons/gi"
function Plans() {
  return (
    <div className="w-screen h-screen flex flex-col mt-5 ">
      {/* title */}
      <div className="flex flex-col items-center mx-3">
        <p className="md:text-7xl text-5xl text-yellow-400 font-bold">
          Nos Plans
        </p>
        <p className="font-bold text-gray-400 md:text-3xl text-xl">
          Choisissez le plan qui vous convient le mieux
        </p>
      </div>
      {/* cards container */}
      <div className="flex items-center justify-evenly flex-wrap my-12 ">
        {/* starter card */}
        <div className="flex flex-col items-center border-2 mx-5 border-blue-500 rounded-xl p-7 my-2 shadow-2xl hover:-translate-y-12 transform transition-all">
          <p className="text-5xl font-bold mb-3 text-blue-400">Débutant</p>
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl text-gray-500">2400 Da</p>
            <p className="self-end font-bold">3 mois</p>
          </div>
          <p className="font-bold text-xl text-gray-500">90 commandes</p>
          <p className="font-bold text-xl text-gray-500">Conception avant</p>
          <p className="font-bold text-xl text-gray-500">3 Couleurs</p>
          <p className="font-bold text-xl text-gray-500">taille S-XL</p>
          <p className="font-bold text-xl text-gray-500">Messenger BOT</p>
          <button className="px-16 py-2 bg-gray-600 hover:bg-gray-800 rounded-2xl mt-3 text-white text-lg font-semibold">Choisir</button>
        </div>

        {/* pro card */}
        <div className="flex flex-col items-center border-2 mx-5 border-purple-400 rounded-xl p-7 my-2 shadow-2xl hover:-translate-y-12 transform transition-all">
          <p className="text-5xl font-bold mb-3 text-purple-600">Pro</p>
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl text-gray-500">4000 Da</p>
            <p className="self-end text-green-400 font-bold">6 mois</p>
          </div>
          <p className="font-bold text-xl text-purple-500">200 commandes</p>
          <p className="font-bold text-xl text-purple-500">
            Conception avant/arrière
          </p>
          <p className="font-bold text-xl text-purple-500">3 Couleurs</p>
          <p className="font-bold text-xl text-purple-500">taille S-XL</p>
          <p className="font-bold text-xl text-purple-500">Messenger BOT</p>
          <button className="px-16 py-2 bg-green-500 hover:bg-green-600 rounded-2xl mt-3 text-white text-lg font-semibold">Choisir</button>
        </div>
        {/* Vip card */}
        <div className="flex flex-col items-center border-4 mx-5 py-12 border-yellow-300 rounded-xl p-7 my-2 shadow-2xl relative hover:-translate-y-12 transform transition-all">
          <GiFallingStar
            className="absolute left-3 top-2 text-yellow-300"
            size={58}
          />
          <p className="text-5xl font-bold mb-3 text-yellow-500">Vip</p>
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl text-gray-500">6500 Da</p>
            <p className="self-end text-red-500 font-bold">12 mois </p>
          </div>
          <p className="font-bold text-xl text-yellow-400">
            Nom de domaine .com
          </p>
          <p className="font-bold text-xl text-yellow-400">
            Commandes illimitées
          </p>
          <p className="font-bold text-xl text-yellow-400">
            Conception avant/arrière
          </p>
          <p className="font-bold text-xl text-yellow-400">3 Couleurs</p>
          <p className="font-bold text-xl text-yellow-400">taille S-XL</p>
          <p className="font-bold text-xl text-yellow-400">
            BOT Messenger/Instagram
          </p>
          <button className="px-16 py-2 bg-red-500 hover:bg-red-700 rounded-2xl mt-4 text-white text-lg font-semibold">Choisir</button>
        </div>
      </div>
    </div>
  )
}

export default Plans

import React from "react"

function Payment() {
  return (
    <div className="w-screen h-screen flex flex-col items-center py-6">
      <h1 className="lg:text-6xl text-4xl text-blue-400 font-bold my-4 ml-4">
        Comment se déroule la procédure de paiment ?
      </h1>
      {/* sellers */}
      <div className="flex items-center flex-col md:flex-row mx-2">
        <div className="flex flex-col items-center mx-4">
          <p className="text-2xl lg:text-4xl text-gray-800 font-semibold font-mono">
            I-Le vendeur
          </p>
          <p className="text-lg font-semibold text-red-500">
            Paiement par CCP/Baridi
          </p>
          <p className=" text-xl text-gray-700 self-start">
            1- Après avoir choisi un plan, vous devez transférer de l'argent sur
            notre compte CCP ou directement par Baridi.
          </p>
          <p className="text-xl text-gray-700">
            2- prendre une photo de la facture de paiement et nous l'envoyer
            depuis le panneau d'utilisateur par en cliquant sur les factures -
            et téléchargez votre facture.
          </p>
          <p className=" text-xl text-gray-700 self-start">
            3- votre compte sera activé dans 30 min.
          </p>
        </div>
        <img
          alt="payment for sellers"
          src="/images/pay.jpg"
          className="max-w-sm md:max-w-xl"
        />
      </div>
      {/* clients */}
      <div className="flex flex-col md:flex-row items-center mt-5">
        <img
          alt="payment for sellers"
          src="/images/paygreen.jpg"
          className="max-w-sm md:max-w-xl"
        />
        <div className="flex items-center flex-col mx-4">
          <p className="text-2xl lg:text-4xl text-gray-800 font-semibold font-mono">
            II-Client
          </p>
          <p className="text-lg font-semibold text-green-500">
            Paiement à la livraison
          </p>
          <p className="text-xl text-gray-700">
            1- Après concéption et confirmation du produit, nous l'imprimerons
            le jour même.
          </p>
          <p className="text-xl text-gray-700">
            2- le client paie une fois le produit arriver à déstination.
          </p>
          <p className="text-xl text-gray-700">
            3- votre portefeuille sera mis à jour directement lorsque la
            commande aura été expédiée.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Payment

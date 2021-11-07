import React from "react"

function Tuto() {
  return (
    <div className="flex flex-col items-center h-screen w-screen p-4 pb-10">
      {/* 1 */}
      <div className="flex flex-col items-center self-end mr-4 mb-14 border-l-8 pl-10 border-blue-500 ">
        <p className="text-4xl font-bold text-gray-700">
          Inscrivez-vous à Print{" "}
        </p>
        <p className="text-blue-500 font-semibold text-2xl">
          Inscrivez-vous à Printi, pour commencer votre voyage dans notre
          plateforme
        </p>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center self-start ml-4 mb-14 border-r-8 pr-10 border-pink-500">
        <p className="text-4xl font-bold text-gray-700">Sélectionnez un plan</p>
        <p className="text-pink-500 font-semibold text-2xl  ">
          choisissez votre meilleur forfait, et profitez de toutes les
          fonctionnalités qui s'y trouve
        </p>
      </div>

      {/* 3 */}
      <div className="flex flex-col items-center self-end mr-4 mb-14 border-l-8 pl-10 border-blue-500 ">
        <p className="text-4xl font-bold text-gray-700">
          Configurer votre compte
        </p>
        <p className="text-blue-500 font-semibold text-2xl">
          remplissez toutes les informations requises, et choisissez le meilleur
          nom pour votre magasin
        </p>
      </div>

      {/* 4 */}
      <div className="flex flex-col items-center self-start ml-4 mb-14 border-r-8 pr-10 border-pink-500">
        <p className="text-4xl font-bold text-gray-700">
          Démarrer la conception
        </p>
        <p className="text-pink-500 font-semibold text-2xl  ">
          choisissez l'un de nos produits et commencer la conception
        </p>
      </div>

      {/* 5 */}
      <div className="flex flex-col items-center self-end mr-4 mb-14 border-l-8 pl-10 border-blue-500 ">
        <p className="text-4xl font-bold text-gray-700">Vendez vos créations</p>
        <p className="text-blue-500 font-semibold text-2xl">
          Quand vous aurez fini de concevoir votre produit,vendez le à vos
          clients
        </p>
      </div>

      {/* 6 */}
      <div className="flex flex-col items-center self-start ml-4 mb-14 border-r-8 pr-10 border-pink-500">
        <p className="text-4xl font-bold text-gray-700">
          Empocher votre argent
        </p>
        <p className="text-pink-500 font-semibold text-2xl  ">
          Une fois que vos clients reçoivent la commande, vous pourez retirer
          votre argent du portefeuille depuis votre Compte bancaire/CCP
        </p>
      </div>
    </div>
  )
}

export default Tuto

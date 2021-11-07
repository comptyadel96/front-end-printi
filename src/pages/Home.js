import React from "react"
import CustomBorder from "./../components/CustomBorder"
import AppForm from "./../components/AppForm"
import AppFormField from "./../components/AppFormField"
import ButtonSubmit from "./../components/ButtonSubmit"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import Footer from "./Footer"
import { FacebookLogin, GoogleLogin } from "./../AppAuthentification/SocialAuth"

function Home() {
  return (
    <div className="flex  w-screen h-screen justify-evenly flex-wrap ">
      {/* svg + text container */}
      <div className="flex flex-col items-center mt-14 mx-4">
        <div className="flex items-center">
          <CustomBorder color="#66bff1" width="3px" height="170px" />
          <div className="flex flex-col items-center ml-14">
            <h1 className="text-4xl font-semibold">
              Service d'impression en ligne à la demande
            </h1>
            <p className="font-bold text-gray-400 mt-4">
              Commencez à concevoir votre t-shirt en ligne et vendez-le à vos
              clients.
            </p>
            <p className="font-bold text-gray-400">
              Vous êtes payé lorsque votre client paie le t-shirt.
            </p>
          </div>
        </div>
        <img
          alt="logo design"
          src="/images/welcome.jpg"
          className="md:max-w-4xl max-w-sm "
        />
      </div>

      {/* Register/login container */}
      <div className="flex flex-col items-center md:mt-14 mt-5">
        {/* text container */}
        <div className="flex flex-col items-center">
          <h1 className="mb-8 text-3xl font-extrabold ">
            Inscrivez-vous à Printi
          </h1>
          <CustomBorder width="360px" height="3px" color="#66bff1" />
        </div>
        {/* form container */}
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <div className="flex flex-col items-center mt-5 ">
            <p className="self-start ml-2 text-gray-500 font-bold ">
              Nom complet
            </p>
            <AppFormField name="name" placeholder=" exemple: jhon doe" />
          </div>
          <div className="flex flex-col items-center ">
            <p className="self-start ml-2 text-gray-500 font-bold ">Email</p>
            <AppFormField
              name="email"
              placeholder="entrer votre email"
              autoComplete="on"
            />
          </div>
          <div className="flex flex-col items-center ">
            <p className="self-start ml-2 text-gray-500 font-bold ">
              Mot de passe
            </p>
            <AppFormField
              name="password"
              placeholder="entrer un mot de passe"
              type="password"
            />
          </div>
          <ButtonSubmit />
        </AppForm>
        {/* facebook and google auth */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-evenly  mt-7  ">
            <CustomBorder width="150px" height="4px" color="#66bff1" />
            <p className="mx-6 text-xl">Ou</p>
            <CustomBorder width="150px" height="4px" color="#66bff1" />
          </div>
          <p className="text-xl text-gray-600 font-semibold mt-5">
            Connectez vous avec :
          </p>
          <div className="flex items-center mt-5">
            {/* facebook */}
            <button
              onClick={() => FacebookLogin()}
              className="flex items-center mx-3 cursor-pointer border-2 border-blue-400 rounded-full px-3 py-1 hover:bg-blue-200 hover:text-white hover:border-transparent "
            >
              <FaFacebook className="mr-2" size={28} color="dodgerblue" />
              <p className="font-semibold">Facebook</p>
            </button>
            {/* google */}
            <button
              onClick={() => GoogleLogin()}
              className="flex items-center mx-3 cursor-pointer border-2 border-red-400 rounded-full px-3 py-1 hover:bg-red-200 hover:text-white hover:border-transparent"
            >
              <FaGoogle className="mr-2" size={28} color="crimson" />
              <p className="font-semibold">Google</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

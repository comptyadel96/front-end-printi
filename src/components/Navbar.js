import React, { useRef } from "react"
import { NavLink } from "react-router-dom"
import {
  ImList2,
  ImCross,
  ImHome,
  ImBullhorn,
  ImTruck,
  ImMagicWand,
  ImCreditCard,
} from "react-icons/im"
function Navbar() {
  const iconRef = useRef(null)
  const openNav = () => {
    iconRef.current.classList.remove("w-0")
    iconRef.current.classList.add("w-52")
  }
  const closeNav = () => {
    iconRef.current.classList.remove("w-52")
    iconRef.current.classList.add("w-0")
  }

  return (
    <div className=" flex items-center  w-screen h-40 bg-gradient-to-r from-pink-200 to-blue-100">
      <div className="lg:ml-28 ml-3 flex flex-col items-center md:mr-5">
        <h1 className=" md:text-7xl text-5xl font-extrabold text-blue-400">
          Printi
        </h1>
        <p className="text-gray-500 text-2xl font-bold">On crée,vous vendez</p>
      </div>
      {/* burger Nav icon  */}
      <div
        className="lg:hidden absolute right-8 top-5 bg-yellow-500 p-3 rounded-full cursor-pointer"
        onClick={openNav}
      >
        <ImList2 className=" text-yellow-200" size={20} />
      </div>

      {/* burger nav */}
      <div
        ref={iconRef}
        className="overflow-x-hidden flex flex-col items-center  h-screen w-0 fixed z-10  top-0 right-0 bg-yellow-300 pt-8 md:pt-16 transition-all duration-700 lg:hidden"
      >
        <ImCross
          className="absolute top-3 right-6 cursor-pointer"
          size={20}
          color="crimson"
          onClick={closeNav}
        />
        <NavLink
          to="/"
          exact
          className="mb-3 text-white text-xl font-semibold flex items-center"
          activeClassName="text-yellow-700"
        >
          <ImHome className="mr-2" /> Acceuil
        </NavLink>
        <NavLink
          to="/tuto"
          className="mb-3 text-white text-xl font-semibold flex items-center"
          activeClassName="text-yellow-700"
        >
          <ImMagicWand className="mr-2" />
          Tutoriel
        </NavLink>
        <NavLink
          to="/plans"
          className="mb-3 text-white text-xl font-semibold flex items-center"
          activeClassName="text-yellow-700"
        >
          <ImBullhorn className="mr-2" /> Plans
        </NavLink>
        <NavLink
          to="/payment"
          className="mb-3 text-white text-xl font-semibold flex items-center"
          activeClassName="text-yellow-700"
        >
          <ImCreditCard className="mr-2" /> Paiment
        </NavLink>
        <NavLink
          to="/delivry"
          className="mb-3 text-white text-xl font-semibold flex items-center"
          activeClassName="text-yellow-700"
        >
          <ImTruck className="mr-2" />
          Livraison
        </NavLink>
      </div>
      {/* default navigation */}
      <div className="md:ml-auto md:mr-32  lg:flex hidden">
        <NavLink
          to="/"
          className="text-gray-500 font-bold text-2xl mr-16 cursor-pointer"
          activeClassName="text-yellow-400 border-b-4 border-yellow-400"
          exact
        >
          Acceuil
        </NavLink>
        <NavLink
          to="/tuto"
          className="text-gray-500 font-bold text-2xl mr-16 cursor-pointer"
          activeClassName="text-yellow-400 border-b-4 border-yellow-400"
        >
          Tutoriel
        </NavLink>
        <NavLink
          to="/plans"
          className="text-gray-500 font-bold text-2xl mr-16 cursor-pointer"
          activeClassName="text-yellow-400 border-b-4 border-yellow-400"
        >
          Plans
        </NavLink>
        <NavLink
          to="/payment"
          className="text-gray-500 font-bold text-2xl mr-16 cursor-pointer"
          activeClassName="text-yellow-400 border-b-4 border-yellow-400"
        >
          Paiment
        </NavLink>
        <NavLink
          to="/delivry"
          className="text-gray-500 font-bold text-2xl mr-16 cursor-pointer"
          activeClassName="text-yellow-400 border-b-4 border-yellow-400"
        >
          Livraison
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar

import { Link, NavLink } from "react-router-dom"
import logo from "/images/social.png"

const Topbar = () => {
  return (
    <>
      <div className="flex justify-between items-center font-archivo h-[4rem] w-[90%] mx-auto">
        <Link to="/" className="flex gap-4 items-center">
            <img src={logo} alt="logo" className="w-[3rem]"/>
            <p className="font-bold text-2xl">DataFluent</p>
        </Link>
        <div className="flex gap-4">
            <NavLink className={({isActive}) => isActive? "text-Green-100 duration-300": "hover:text-Green-100 duration-300"} to= "/">Home</NavLink>
            <NavLink className={({isActive}) => isActive? "text-Green-100 duration-300": "hover:text-Green-100 duration-300"} to= "/solutions">Solutions</NavLink>
            <NavLink className={({isActive}) => isActive? "text-Green-100 duration-300": "hover:text-Green-100 duration-300"} to= "/career">Career</NavLink>
            <NavLink className={({isActive}) => isActive? "text-Green-100 duration-300": "hover:text-Green-100 duration-300"} to= "/products">Products</NavLink>
            <NavLink className={({isActive}) => isActive? "text-Green-100 duration-300": "hover:text-Green-100 duration-300"} to= "/contacts">Contacts</NavLink>
            <NavLink className={({isActive}) => isActive? "text-Green-100 duration-300": "hover:text-Green-100 duration-300"} to= "/about-us">About Us</NavLink>
        </div>
      </div>
    </>
  )
}

export default Topbar

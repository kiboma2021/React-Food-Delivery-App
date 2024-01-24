import { Link,NavLink } from "react-router-dom"
import Logo from "../assets/logo.jpeg"


export const Header = () => {
  return (
    <div className="flex justify-around items-center flex-wrap mt-5">
        <Link to='/' className="flex flex-wrap items-center gap-4" >
            <img className="w-24 rounded" src={Logo} alt="FoodApp" />
            <p className="text-2xl" >Food ChapChap</p>
        </Link>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='cart' >Cart</NavLink>
        </div>
        <Link to='cart'>
            <p>Cart: 5</p>
        </Link>
    </div>
  )
}

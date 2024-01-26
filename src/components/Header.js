import { Link,NavLink } from "react-router-dom"
import Logo from "../assets/logo.jpeg"
import { useCart } from "../context/CartContext"


export const Header = () => {
  const { cartList } = useCart();
  return (
    <div className="flex justify-around items-center flex-wrap mt-5">
        <Link to='/' className="flex flex-wrap items-center gap-4" >
            <img className="w-24 rounded" src={Logo} alt="FoodApp" />
            <p className="text-4xl" >Food ChapChap</p>
        </Link>
        <div className="flex gap-10 text-2xl">
            <NavLink to='/' className="m-2 p-2">Home</NavLink>
            <NavLink to='cart' className="m-2 p-2" >Cart</NavLink>
        </div>
        <Link to='cart'>
            <p className="text-2xl font-bold">Cart: <span className="p-2 bg-red-600 rounded-full text-white">{cartList.length}</span></p>
        </Link>
    </div>
  )
}

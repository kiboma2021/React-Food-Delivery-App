import { useCart } from "../context/CartContext"

export const Cart = () => {
  const { cartList,removeItemFromCart } = useCart()
  return (
    <main>
        <div className='flex justify-center my-8'>
            <p className='text-2xl font-bold'>Cart Items: {cartList.length} | $ 2,542  </p>
        </div>

        <div className='mx-40 '>

                {cartList && cartList.map(order=>(
                <div className='flex flex-wrap justify-around m-5 p-5 border-4 border-gray-200 items-center'>

                    <div className='w-32'  >
                    <img src={order.image} alt={order.name} />
                    </div>
                    <p className='m-5'>{order.name}</p>
                    <p className='m-5'>${order.price}</p>
                    <div>
                    <span onClick={()=>removeItemFromCart(order)} className='bg-red-600 p-2 m-2 rounded text-white'>Remove</span>
                    </div>
                </div>
                ))}



        </div>

    </main>
  )
}


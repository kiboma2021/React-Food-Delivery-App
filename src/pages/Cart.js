import image1 from "../assets/Awadhi_prawns.jpg"
import image2 from "../assets/Ribs.jpg"


export const Cart = () => {
  return (
    <main>
        <div className='flex justify-center my-8'>
            <p className='text-2xl font-bold'>Cart Items: 0 | Kes 2,542  </p>
        </div>

        <div className='mx-40 '>
            <div className='flex flex-wrap justify-around m-5 p-5 border-4 border-gray-200 items-center'>
                <div className='w-32'  >
                    <img src={image1} alt="Cart" />
                </div>
                <p className='m-5'>Shrimp and prawn</p>
                <p className='m-5'>$145</p>
                <div>
                    <span className='bg-red-600 p-2 m-2 rounded'>Remove</span>
                </div>
            </div>

            <div className='flex flex-wrap justify-around m-5 p-5 border-4 border-gray-200 items-center'>
                <div className='w-32'  >
                    <img src={image2} alt="Cart" />
                </div>
                <p className='m-5'>Ribs</p>
                <p className='m-5'>$145</p>
                <div>
                    <span className='bg-red-600 p-2 m-2 rounded'>Remove</span>
                </div>
            </div>

        </div>

    </main>
  )
}


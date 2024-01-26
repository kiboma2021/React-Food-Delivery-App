import { createContext, useContext,useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer"

const initialState = {
    cartList: [],
    total: 0,
}

const CartContext = createContext(initialState)

export const CartProvider =({children})=> {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart =(order)=>{
        const updatedCart = state.cartList.concat(order);

        console.log(updatedCart);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ordered_items: updatedCart
            }
        }

        )


    }
    const value = {
        total: state.total,
        cartList:state.cartList,
        addToCart
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () =>{
    const context = useContext(CartContext)
    return context;
}
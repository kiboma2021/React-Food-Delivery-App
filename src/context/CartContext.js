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
        updateTotal(updatedCart);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ordered_items: updatedCart
            }
        })
    }

    const removeItemFromCart=(cart_item) => {
        const updatedCart = state.cartList.filter(item => item.id !== cart_item.id);
        updateTotal(updatedCart);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                ordered_items: updatedCart
            }
        })
    }

    const updateTotal = (cartList) => {
        let total = 0;
        cartList.forEach(item => (total = total + item.price));
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })       
        };

    const value = {
        total: state.total,
        cartList:state.cartList,
        addToCart,
        removeItemFromCart
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
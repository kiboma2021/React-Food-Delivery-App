import { Route, Routes } from 'react-router-dom';
import { Cart,Home,PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home title='Home'/>} ></Route>
        <Route path='cart' element={<Cart title='Shopping Cart' />} ></Route>
        <Route path='*' element={<PageNotFound title='404 Error' />} ></Route>
    </Routes>
  )
}


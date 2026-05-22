import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Layout from './components/Layout'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'


function App() {

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/shop/:id",
          element: <ProductDetails />
        },{
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
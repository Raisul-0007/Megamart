import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Layout from './components/Layout'

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
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AllItems from './Components/AllItems/AllItems.jsx';
import MyCraftItems from './Components/MyCraftItems/MyCraftItems.jsx';
import Home from './Components/Navbar/Home/Home.jsx';
import AddItems from './Components/AddItem/AddItems.jsx';
import UpdateItem from './Components/UpdateItem/UpdateItem.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
     
      {
        path:"/additems",
        element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
      },
      {
        path:"/allitems",
        element:<AllItems></AllItems>,
        loader: () => fetch('https://art-craft-server-coral.vercel.app/all-item')
      },
      {
        path:"/mycraftitems",
        element:<PrivateRoute><MyCraftItems></MyCraftItems></PrivateRoute>,
        loader: () => fetch('https://art-craft-server-coral.vercel.app/all-item')
      },
      {
        path:"/updateitem/:id",
        element:<UpdateItem></UpdateItem>,
        loader: ({params}) => fetch(`https://art-craft-server-coral.vercel.app/all-item/${params.id}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

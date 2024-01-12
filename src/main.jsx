import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Component/Home/Home';

import AuthProvider from './Component/Provider/authProvider';
import Login from './Component/registration/Login';

import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

import Contact from './Component/Contac/Contact';

import Alice from './Component/Chat/Alice';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
 
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/chat",
        element: <PrivateRoute>
          <Alice />
        </PrivateRoute>,

      },
     
      {
        path: "/login",
        element: <Login />,
      },
      
     
    ],
  },
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
 <AuthProvider>
 <DndProvider backend={HTML5Backend}>
 <RouterProvider router={router} />
 </DndProvider>
 </AuthProvider>
 </QueryClientProvider>
  </React.StrictMode>
);
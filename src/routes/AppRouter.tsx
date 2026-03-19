import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import MainLayout from "../layouts/MainLayout";
import { ChatPage, LoginPage, SignUpPage } from "../pages";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute> <ChatPage /> </ProtectedRoute>
      },
      {
        path: 'login',
        element: <PublicRoute> <LoginPage /> </PublicRoute>
      },
      {
        path: 'signup',
        element: <PublicRoute> <SignUpPage /> </PublicRoute>
      },
    ]
  }
])

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position='top-right' />
    </>
  )
}

export default AppRouter;

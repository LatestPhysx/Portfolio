import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import MainPage from './pages/mainPage';

const router = createBrowserRouter([{
  path: "/", element: <MainLayout />, children: [
    {
      index: true,
      element: <MainPage />
    },
    {
      path: '*',
      element: <MainPage />
    }
  ]
}]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
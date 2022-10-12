import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Admin from '../pages/Admin'
import Auth from '../pages/Auth'
import Basket from '../pages/Basket'
import DevicePage from '../pages/DevicePage'
import Error from '../pages/Error'
import Shop from '../pages/Shop'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from '../utils/constants'

const createRouter = (isAuth) =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index element={<Shop />} />
        <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage />} />
        <Route path={REGISTRATION_ROUTE} element={<Auth />} />
        <Route path={LOGIN_ROUTE} element={<Auth />} />
        {isAuth && <Route path={ADMIN_ROUTE} element={<Admin />} />}
        {isAuth && <Route path={BASKET_ROUTE} element={<Basket />} />}
        {/* <Route path="*" element={<Shop />} /> */}
      </Route>,
    ),
  )

const AppRouter = ({ isAuth }) => {
  return <RouterProvider router={createRouter(isAuth)} />
}

export default AppRouter

import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Context } from '..'
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

const AppRouter = observer(() => {
  const { user } = useContext(Context)

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<RootLayout />} errorElement={<Error />}>
            <Route index element={<Shop />} />
            <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage />} />
            <Route path={REGISTRATION_ROUTE} element={<Auth />} />
            <Route path={LOGIN_ROUTE} element={<Auth />} />

            {user.isAuth && <Route path={ADMIN_ROUTE} element={<Admin />} />}
            {user.isAuth && <Route path={BASKET_ROUTE} element={<Basket />} />}
          </Route>,
        ),
      )}
    />
  )
})

export default AppRouter

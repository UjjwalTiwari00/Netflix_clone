import React, { useEffect } from 'react'
import Login from './Login'
import  {Browser}  from './Browser'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


export const Body = () => {
  const AppRouting=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browser',
      element:<Browser/>
    }
  ])

 



  return (
    <div>
        <RouterProvider router={AppRouting}/>
    </div>
  )
}

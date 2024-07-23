import React from 'react'
import Login from './Login'
import  {Browser}  from './Browser'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import GPTsearchPage from './GPTsearchPage'


export const Body = () => {
  const AppRouting=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browser',
      element:<Browser/>,
    },
    {
      path:'/GPTsearch',
      element:<GPTsearchPage/>
    }
  ])
  return (
    <div>
        <RouterProvider router={AppRouting}/>
    </div>
  )
}

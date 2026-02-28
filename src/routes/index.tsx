import { createBrowserRouter, RouterProvider } from 'react-router'

import DefaultLayout from '@/layout/default'


import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'

import Movies from '@/pages/Movie'
import MovieDetails from '@/pages/MovieDetail'
const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },


      // path: '/movies/:movieId' - 동적 세그먼트
      // {
      //   path: '/movies/:movieId',
      //   element: <MovieDetails />
      // }
      // 중첩 (Outlet - children 기준 아래로 나옴 - 중첩 가능(처음부터 내려오는게 아님 칠드런 기준))
      {
        path: '/movies',
        element: <Movies />,
        children: [
          {
            path: ':movieId', // '/movies/:movieId'
            element: <MovieDetails />
          }
        ]
      }
    ]
  }
])





export default function Router() {
  return <RouterProvider router={router} />
}
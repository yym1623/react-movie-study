import { createBrowserRouter, RouterProvider } from 'react-router'

import DefaultLayout from '@/layout/default'


import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'
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
      {
        path: '/movies/:movieId',
        element: <MovieDetails />
      }
    ]
  }
])





export default function Router() {
  return <RouterProvider router={router} />
}
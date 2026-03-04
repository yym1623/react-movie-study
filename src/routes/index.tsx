import { createBrowserRouter, RouterProvider } from 'react-router'

// layout
import DefaultLayout from '@/layout/default'

// pages
import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'
import Movies from '@/pages/Movie'
import MovieDetails from '@/pages/MovieDetail'
import NotFound from '@/pages/NotFound'

import SignIn from '@/pages/SignIn'

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
      {
        path: '/signin',
        element: <SignIn />

      },
      // 중첩 children - children한 부모기준에서 Qutlet를 해야 그 아래 children들이 나온다
      {
        path: '/movies',
        element: <Movies />,
        children: [
          {
            path: ':movieId', // '/movies/:movieId' -> ':' 동적 세그먼트
            element: <MovieDetails />
          }
        ]
      },

      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])


export default function Router() {
  return <RouterProvider router={router} />
}
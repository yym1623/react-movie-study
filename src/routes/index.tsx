import { createBrowserRouter, RouterProvider } from 'react-router'
import { lazy } from 'react'

// layout
import DefaultLayout from '@/layout/default'

// pages
const Home = lazy(async () => {
  // 테스트용: Home 페이지 로딩을 2초 늦게 함
  await new Promise(resolve => setTimeout(resolve, 2000))
  return import('@/pages/HomePage')
})


// const data1 = new Promise((resolve, reject) => {
//   resolve('data1')
//   reject('error')
// })

// const data2 = async() => {
//   try {
//     await console.log('data1')
//     await console.log('data2')
//   } catch(error) {
//     console.log(error)
//   }
// }

// const data3


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
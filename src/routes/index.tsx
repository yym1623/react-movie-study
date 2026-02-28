// redirect - 보호된 경로 설정
// ex) 로그인 한 사람만 접근시킨다 - 로그인페이지에서 로그인 실패하면 돌려보내낟
// const redirectTo = url.pathname + url.search // 요청 페이지의 경로 + 쿼리스트링
// return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
// 이렇게 catch 등등 실패쪽에 redirectTo 메시지와 함꼐 돌려보낸다
// import { requiresAuth } from './loaders/requiresAuth'


// react- lazt함수
// lazy와 import 함수를 사용해 컴포넌트를 동적으로 로드합니다.
// lazy 함수가 반환한 컴포넌트는 사용될 때 로드를 시작합니다.
// -> 초기 로딩 지연 늦출려고 페이지 사용자가 접근할때만 동적으로 불러온다 (장단점있음)

// 로딩처리

// Suspense 컴포넌트를 사용하면 컴포넌트를 로드하는 동안 로딩 상태를 관리할 수 있습니다.
// fallback 속성을 사용해 로딩 상태를 표시할 요소나 컴포넌트를 지정합니다.

import { createBrowserRouter, RouterProvider } from 'react-router'

import DefaultLayout from '@/layout/default'


import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'

import Movies from '@/pages/Movie'
import MovieDetails from '@/pages/MovieDetail'

import NotFound from '@/pages/NotFound'

// npm i framer-motion - 페이지 바뀔때마다 전환 애니메이션 줄 수 있는 라이브러리

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

      // lazy, suspense같이 
      // suspense - 나오기전까지 다른거 보여준다? 
      // {
  //   path: '/',
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Home />
  //     </Suspense>
  //   )
  // },


      // path: '/movies/:movieId' - 동적 세그먼트
      // {
      //   path: '/movies/:movieId',
      //   element: <MovieDetails />
      // }
      // 중첩 (Outlet - children 기준 아래로 나옴 - 중첩 가능(처음부터 내려오는게 아님 칠드런 기준))
      {
        path: '/movies',
        element: <Movies />,
        // loader: requiresAuth,
        // 라우트 정보의 loader 속성에 Loader 함수를 전달합니다.
// 이제 /movies를 포함하는 하위 페이지로 접근하면 Loader 함수가 호출되어 승인 여부를 확인합니다.
// 실패하면 반환된다 requirect 시킨다
        children: [
          {
            path: ':movieId', // '/movies/:movieId'
            element: <MovieDetails />
          }
        ]
      },


      // 404 페이지 - 보통 마지막에 위치해야한다 ex) 일치하지않을경우 순차적으로 내려가며 없을때 나와야해서 마지막위치 - 위에다하면 순서 잘못되서 읽다가 이게먼저나오고 찾으면 나올수있기때문?
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
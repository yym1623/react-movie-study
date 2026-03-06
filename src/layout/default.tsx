import { Outlet, ScrollRestoration } from 'react-router'
import Header from '@/components/Header'

export default function DefaultLayout() {



  return (
    <>  
      <Header />
      <main className="container p-4">
       <Outlet />
      </main>
      <ScrollRestoration />
    </>
  )
}
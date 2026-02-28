import { Outlet, ScrollRestoration } from 'react-router'
import Header from '@/components/Header'


export default function DefaultLayout() {
  return (
    <>  
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
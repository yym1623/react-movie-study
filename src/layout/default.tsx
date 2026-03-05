import { Outlet, ScrollRestoration } from 'react-router'
import Header from '@/components/Header'
import { useEffect } from 'react'

export default function DefaultLayout() {

  useEffect(() => {
    setTimeout(() => {
      console.log('10 seconds passed')
    }, 10000)
  }, [])



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
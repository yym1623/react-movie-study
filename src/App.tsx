import { Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'

/**
 * App 루트 컴포넌트
 * - React Router: Routes/Route + Link 사용
 * - Tailwind: 클래스 이름으로 바로 스타일 적용
 */
function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <span className="text-lg font-semibold text-sky-400">
            React + Router + Zustand + Tailwind
          </span>
          <nav className="flex gap-3 text-sm">
            <Link
              to="/"
              className="rounded-md px-3 py-1.5 hover:bg-slate-800/80"
            >
              홈
            </Link>
            <Link
              to="/about"
              className="rounded-md px-3 py-1.5 hover:bg-slate-800/80"
            >
              설명
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

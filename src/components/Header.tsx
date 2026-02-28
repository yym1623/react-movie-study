// NavLink - Link 확장형 -> 현재 페이지 주소와 링크된 페이지 주소가 같으면 클래스 추가
// Link - 단순 페이지 이동
// redirect - 리다이렉션
// useNavigate - 요소로 하면 해당 화면오면 리다이렉트 된다, 함수로 하면 해당 페이지로 이동하는 함수 이용가능, 히스토리 기능 -1, 1로 앞 뒤이동도 가능
// 요소로하면 - <Navigate to="/signin" replace /> 페이지 렌더링될때 바로 to쪽으로 리렌더링된다
import { NavLink, useNavigate } from 'react-router'

import styles from '@/styles/Header.module.css'

export default function Header() {
  // const navigate = useNavigate()
  
  const navigations = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/movies/tt4154796', label: 'Movie(Avengers: Endgame)' }

  ]
  return (
    <div>
      {/* link, navLink att */}
      {/* att - replace - history.replace() -> 이전 페이지 갈때 안 돌아간다 */}
      {/* att - preventScrollReset -> 스크롤 옵션 막아준다 */}


      <header>
        <nav className={styles.nav}>
          {navigations.map(nav => (
            <NavLink
              key={nav.to}
              to={nav.to}
              className={({ isActive }) => (isActive ? styles.active : '')}>
              {nav.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  )
}

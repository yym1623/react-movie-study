import { NavLink } from 'react-router'

import styles from '@/styles/Header.module.css'

export default function Header() {
  
  const navigations = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/signin', label: 'SignIn' },
    { to: '/movies', label: 'Movies' },
    { to: '/movies/tt4154796', label: 'Movie(Avengers: Endgame)' }

  ]
  return (
    <div>
      <header>
        <nav className={styles.nav}>
          {navigations.map(nav => (
            <NavLink
              key={nav.to}
              to={nav.to}
              end
              className={({ isActive }) => (isActive ? styles.active : '')}>
              {nav.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  )
}

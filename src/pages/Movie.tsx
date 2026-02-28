import { useState } from 'react'
import { Link, Outlet } from 'react-router'

interface Movie {
  imdbID: string
  Title: string
  Poster: string
}

export default function Movies() {
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])

  async function fetchMovies() {
    const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${title}`)
    const { Search: movies } = await res.json()
    setMovies(movies)
  }

  return (
    <>
      <h1>Movies</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') fetchMovies() }}
      />
      <button onClick={fetchMovies}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
      {/* useOutlet - 중첩된 컴포넌트를 렌더링하는 데 사용됩니다. */}
      {/* Outlet - 랑 똑같은 자식 렌더링이지만 더 유연하다, 페이지 전환 쉽게 감지 및 넘어갈때 애니메이션 등등 추가됨 */}
      {/* import { Link, useOutlet } from 'react-router', const outlet = useOutlet() -> outlet 데이터 바인딩으로 사용 */}
      <Outlet />
    </>
  )
}
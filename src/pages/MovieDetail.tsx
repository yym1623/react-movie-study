import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

interface Movie {
  Title: string // 영화 제목
  Poster: string // 영화 포스터 URL
}

export default function MovieDetails() {
  const [movie, setMovie] = useState<Movie | null>(null)
  const { movieId } = useParams()

  useEffect(() => {
    fetchMovie()
  }, [movieId])

  async function fetchMovie() {
    const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&i=${movieId}`)
    const movie = await res.json()
    setMovie(movie)
  }

  return (
    <div>
      <h1>{movie?.Title}</h1>
      <img src={movie?.Poster} alt={movie?.Title} />
    </div>
  )
}
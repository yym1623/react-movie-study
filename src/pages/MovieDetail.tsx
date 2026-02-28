import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import styles from '@/styles/MovieDetails.module.css'

interface Movie {
  Title: string
  Poster: string
}

export default function MovieDetails() {
  const navigate = useNavigate()
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    if (!movieId) return
    async function fetchMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=7035c60c&i=${movieId}`
      )
      const data = await res.json()
      setMovie(data)
    }
    fetchMovie()
  }, [movieId])

  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        onClick={() => navigate(-1)}
      />
      <div className={styles.content}>
        <h1>{movie?.Title}</h1>
        <img src={movie?.Poster} alt={movie?.Title} />
      </div>
    </div>
  )
}
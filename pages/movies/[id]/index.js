import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../actions'

const Movie = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { movie } = props

  const handleDelete = (id) => {
    deleteMovie(id).then(() => router.push('/'))
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.address}</h1>
        <p className="lead">{movie.city}</p>
        <hr className="my-4" />
        <p>{movie.requestType}</p>
        <p>{movie.referencetotal + ' ' + movie.referenceCurrency}</p>
        <button
          onClick={() => router.push(`/movies/${id}/edit`)}
          className="btn btn-warning btn-lg mr-1"
          type="button">Update
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-danger btn-lg"
          type="button">Delete
        </button>
      </div>
    </div>
  )
}

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)

  return { movie }
}

export default Movie

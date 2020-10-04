import React from 'react'
import Link from 'next/link'

const MovieList = (props) => {
  const { movies } = props
  //const shorten = (text) => text.substr(0, 100) + '...'
  return (
    <React.Fragment>
      { movies.length > 0 ?
        movies.map(movie => {
          return (
            <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                  <a>
                  </a>
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                      <a>{movie.address}</a>
                    </Link>
                  </h4>
                  <h6 className="card-subtitle mb-2 text-muted">{movie.city}</h6>
                  <h5>{movie.requestType}</h5>
                  <p className="card-text">{movie.referencetotal + ' ' + movie.referenceCurrency}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{movie.status}</small>
                </div>
              </div>
            </div>
          )
        })
        : <div className="ml-3 alert alert-warning" role="alert">
          No hay cotizaciones en esta categoría :(
          </div>
      }
    </React.Fragment>
  )
}

export default MovieList

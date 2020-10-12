import React from 'react'
import Link from 'next/link'

const MovieList = (props) => {
  const { quotes } = props
  //const shorten = (text) => text.substr(0, 100) + '...'
  return (
    <React.Fragment>
      { quotes.length > 0 ?
        quotes.map(quote => {
          return (
            <div key={quote.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link href="/quotes/[id]" as={`/quotes/${quote.id}`}>
                  <a>
                  </a>
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link href="/quotes/[id]" as={`/quotes/${quote.id}`}>
                      <a>{quote.address}</a>
                    </Link>
                  </h4>
                  <h6 className="card-subtitle mb-2 text-muted">{quote.city}</h6>
                  <h5>{quote.requestType.name}</h5>
                  <p className="card-text">{quote.referencetotal + ' ' + quote.referenceCurrency.ISO4217Code}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{quote.status.name}</small>
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
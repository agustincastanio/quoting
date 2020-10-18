import { useRouter } from 'next/router'
import { getQuoteById, deleteQuote } from '../../../actions'

const Quote = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { quote } = props

  const handleDelete = (id) => {
    deleteQuote(id).then(() => router.push('/'))
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">La dirección es {quote.address}, {quote.city}</h1>
        <p className="lead">Tiene un total de {quote.items.length} elementos</p>
        <hr className="my-4" />
        <p>Es una {quote.requestType.name} por un valor aproximado de {quote.referencetotal.toLocaleString() + ' ' + quote.referenceCurrency.ISO4217Code}.</p>
        <button
          onClick={() => router.push(`/quotes/${id}/edit`)}
          className="btn btn-warning btn-lg mr-1"
          type="button">Editar
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-danger btn-lg"
          type="button">Borrar
        </button>
      </div>
    </div>
  )
}

Quote.getInitialProps = async ({ query }) => {
  const quote = await getQuoteById(query.id)

  return { quote }
}

export default Quote

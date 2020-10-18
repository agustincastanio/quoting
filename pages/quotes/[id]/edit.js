import React from 'react'
import Router from 'next/router';
import { getQuoteById, updateQuote } from '../../../actions'
import MovieCreateForm from '../../../components/movieCreateForm'

class Edit extends React.Component {

  static getInitialProps({ query }) {
    return { query }
  }

  state = {
    quote: {}
  }

  handleQuoteUpdate = (quote, cleanCallback) => {
    updateQuote(quote)
      .then(() => {
        Router.push('/')
      })
  }

  componentDidMount() {
    const { id } = this.props.query
    getQuoteById(id).then((quote) => {
      this.setState({ quote })
    })
  }

  render() {
    const { quote } = this.state
    return (
      <div className="container">
        <h1>Editar la cotización</h1>
        <MovieCreateForm
          initialData={quote}
          handleFormSubmit={this.handleQuoteUpdate} />
      </div>
    )
  }
}

export default Edit

import React from 'react'
import Router from 'next/router';
import { getQuoteById, updateQuote, getAllTypes } from '../../../actions'
import MovieCreateForm from '../../../components/movieCreateForm'

class Edit extends React.Component {

  static getInitialProps({ query }) {
    return { query }
  }

  constructor(props) {
    super(props)
    this.state = {
      quote: {},
      allTypes: {}
    }
  }

  handleQuoteUpdate = (quote) => {
    updateQuote(quote)
      .then(() => {
        Router.push('/')
      })
  }

  async componentDidMount() {
    const { id } = this.props.query

    let promises = []

    promises.push(getQuoteById(id))
    promises.push(getAllTypes())

    const result = await Promise.all(promises);

    this.setState({
      quote: result[0],
      allTypes: result[1]
    })
  }

  render() {
    const { quote, allTypes } = this.state

    return (
      <div className="container">
        <h1>Editar la cotización</h1>
        <MovieCreateForm
          initialData={quote}
          allTypesData={allTypes}
          handleFormSubmit={this.handleQuoteUpdate} />
      </div>
    )
  }
}

export default Edit

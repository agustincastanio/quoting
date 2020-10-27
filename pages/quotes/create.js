import React from 'react'
import Router from 'next/router';
import { createQuote, getAllTypes } from '../../actions'
import MovieCreateForm from '../../components/movieCreateForm'

class Create extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            allTypes: {}
        }
    }

    handleCreateQuotee = (quote) => {
        createQuote(quote)
            .then(() => {
                this.props.addQuoteToList()
                Router.push('/')
            })
    }

    componentDidMount() {
        getAllTypes().then((allTypes) => {
            this.setState({ allTypes })
        })
    }

    render() {
        const { allTypes } = this.state

        return (
            <div className="container">
                <h1>Crear una cotización</h1>
                <MovieCreateForm
                    allTypesData={allTypes}
                    handleFormSubmit={this.handleCreateQuotee} />
            </div>
        )
    }
}

export default Create

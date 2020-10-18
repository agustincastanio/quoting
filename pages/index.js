import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import SideMenu from '../components/sideMenu'
import MovieList from '../components/movieList'
import { getQuotes, getQuoteStatus } from '../actions'

const Home = (props) => {
  const { quotes = [], categories = [] } = props

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const { quotes } = props
  }, []);

  const changeCategory = (category) => {
    setFilter(category)
  }

  const filterQuotes = (quotes) => {
    if (filter === 'all') {
      return quotes
    }

    return quotes.filter(q => {
      return q.status && q.status.name.includes(filter)
    })
  }

  const addQuoteToList = () => {
    Router.push('/')
  }

  // If passing a second argument (array), React will run the callback after the first render and every time one of the elements in the array is changed. for example when placing useEffect(() => console.log('hello'), [someVar, someOtherVar]) - the callback will run after the first render and after any render that one of someVar or someOtherVar are changed.
  // By passing the second argument an empty array, React will compare after each render the array and will see nothing was changed, thus calling the callback only after the first render.

  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                activeCategory={filter}
                changeCategory={changeCategory}
                addQuoteToList={addQuoteToList}
                categories={categories} />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <MovieList
                  quotes={filterQuotes(quotes)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const categories = await getQuoteStatus()
  const quotes = await getQuotes()

  return {
    quotes,
    categories
  }
}

export default Home







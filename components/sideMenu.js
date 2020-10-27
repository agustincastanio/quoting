import React from 'react'
import Router from 'next/router';


class SideMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button
          onClick={() => Router.push(`/quotes/create`)}
          className="btn btn-primary btn-lg mr-1"
          type="button">Nueva cotización!
        </button>

        <h1 className="my-4">Cotizaciones</h1>
        <div className="list-group">
          <a
            key='all'
            onClick={() => this.props.changeCategory('all')}
            href="#"
            className={`list-group-item ${this.props.activeCategory === 'all' ? 'active' : ''}`}>Todas
          </a>
          {this.props.categories.map(c => (
            <a
              key={c.id}
              onClick={() => this.props.changeCategory(c.name)}
              href="#"
              className={`list-group-item ${this.props.activeCategory === c.name ? 'active' : ''}`}>{c.name}
            </a>
          ))
          }
        </div>
      </div>
    )
  }
}

export default SideMenu

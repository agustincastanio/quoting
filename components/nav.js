
import React from 'react'
import Link from 'next/link'

class Nav extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Quoting</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav-link px-2 active">
                <Link href="/">
                  <a className="nav-link">Inicio
                    <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item nav-link px-2">
                <Link href="/about">
                  <a className="nav-link" href="#">Qué sómos?</a>
                </Link>
              </li>
              <li className="nav-item nav-link px-2">
                <Link href="/howItWorks">
                  <a className="nav-link" href="#">Cómo funciona?</a>
                </Link>
              </li>
              <li className="nav-item nav-link px-2">
                <Link href="/advantage">
                  <a className="nav-link" href="#">Ventajas</a>
                </Link>
              </li>
              <li className="nav-item nav-link px-2">
                <Link href="/contact">
                  <a className="nav-link" href="#">Contactanos</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav

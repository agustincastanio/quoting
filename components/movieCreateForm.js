import React from 'react'
import { getAllTypes } from '../actions'

class MovieCreateForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasInitialDataLoaded: false,
      allTypes: {},
      form: {
        address: '',
        city: '',
        status: '',
        addressType: '',
        requestType: '',
        category: '',
        referencetotal: '',
        referenceCurrency: '',
        endDate: '',
        items: ''
      }
    }
  }

  async componentDidUpdate() {
    if (this.props.initialData && !this.state.hasInitialDataLoaded) {

      const allTypes = await getAllTypes()

      this.setState({
        form: this.props.initialData,
        allTypes: allTypes,
        hasInitialDataLoaded: true
      })
    }
  }

  handleChange = (event) => {
    const target = event.target
    const name = target.name
    this.setState({
      form: {
        ...this.state.form,
        [name]: target.value
      },
      allTypes: { ...this.state.allTypes }
    })
  }

  handleGenreChange = (event) => {
    const { options } = event.target
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    this.setState({
      form: {
        ...this.state.form,
        genre: value.toString()
      },
      allTypes: { ...this.state.allTypes }
    })
  }

  submitForm = () => {
    this.props.handleFormSubmit(this.state.form, () => {
      this.setState({
        form: {
          address: '',
          city: '',
          status: '',
          addressType: '',
          requestType: '',
          category: '',
          referencetotal: '',
          referenceCurrency: '',
          endDate: '',
          items: ''
        },
        allTypes: {}
      })
    })
  }

  render() {
    const { form, allTypes } = this.state

    let optionTemplate = {}

    if (Object.keys(allTypes).length !== 0) {
      Object.keys(allTypes).forEach(function (key) {
        optionTemplate[key] = allTypes[key].map(v => (
          <option key={v.id} value={v.id}>{v.name}</option>
        ));
      });
    } else {
      optionTemplate = <option key="0" value="default">No hay opciones</option>
    }

    return (
      <form>
        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <input
            value={form.address}
            onChange={this.handleChange}
            name="address"
            type="text"
            className="form-control" id="address" placeholder="Nombre y número de la calle" />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ciudad</label>
          <input
            value={form.city}
            onChange={this.handleChange}
            name="city"
            type="text"
            className="form-control" id="city" placeholder="CABA" />
        </div>
        <div className="form-group">
          <label htmlFor="addressType">Tipo de dirección</label>
          <select className="form-control" id="addressType">
            {optionTemplate.addressType || optionTemplate}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="requestType">Tipo de cotización</label>
          <input
            value={form.requestType.name}
            onChange={this.handleChange}
            name="requestType"
            type="text"
            className="form-control" id="requestType" placeholder="compra especifica" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <input
            value={form.category.name}
            onChange={this.handleChange}
            name="category"
            type="text"
            className="form-control" id="category" placeholder="materiales gruesos" />
        </div>
        <div className="form-group">
          <label htmlFor="referencetotal">Total de referencia</label>
          <input
            value={form.referencetotal}
            onChange={this.handleChange}
            name="referencetotal"
            type="text"
            className="form-control" id="referencetotal" placeholder="$$$" />
        </div>
        <div className="form-group">
          <label htmlFor="referenceCurrency">Moneda</label>
          <input
            value={form.referenceCurrency.ISO4217Code}
            onChange={this.handleChange}
            name="referenceCurrency"
            type="text"
            className="form-control" id="referenceCurrency" placeholder="ARS" />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Fecha de vencimiento</label>
          <input
            value={form.endDate}
            onChange={this.handleChange}
            name="endDate"
            type="text"
            className="form-control" id="endDate" placeholder="DD-MM-AAAA" />
        </div>
        <button onClick={this.submitForm} type="button" className="btn btn-primary">Guardar cambios</button>
      </form>
    )
  }
}

export default MovieCreateForm


import React from 'react'

class QuoteAddItemForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            hasInitialDataLoaded: false,
            items: []
        }
    }

    componentDidUpdate() {

        if (!this.state.hasInitialDataLoaded) {
            if (this.props.allItems && this.props.allItems.length !== 0) {
                this.setState({
                    items: this.props.allItems,
                    hasInitialDataLoaded: true
                })
            }
        }
    }

    submitForm = () => {
        this.props.handleFormSubmit(this.state, () => {
            this.setState({
                items: []
            })
        })
    }

    render() {

        const { items } = this.state

        let optionTemplateItems = []

        if (items.length !== 0) {
            items.forEach(function (v) {
                optionTemplateItems.push(
                    <div className="form-row" key={v.id}>
                        <div className="col-7">
                            <input type="text" readOnly className="form-control m-2" id="Material" defaultValue={v.item.name} />
                        </div>
                        <div className="col">
                            <input type="number" className="form-control m-2" placeholder="Cantidad" defaultValue={v.quantity} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control m-2" placeholder="Unidad" defaultValue={v.item.unitType.name} />
                        </div>
                        <div className="col">
                            <input type="number" readOnly className="form-control m-2" placeholder="Precio de referencia" defaultValue={v.item.referencePrice} />
                        </div>
                        <div className="col">
                            <input type="text" readOnly className="form-control m-2" placeholder="Moneda" defaultValue={v.item.referencePriceUnity.ISO4217Code} />
                        </div>
                    </div>
                )
            });
        } else {
            optionTemplateItems =
                <div className="form-row" key="1">
                    <div className="col-7">
                        <input type="text" className="form-control m-2" placeholder="Material" />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control m-2" placeholder="Cantidad" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control m-2" placeholder="Unidad" />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control m-2" placeholder="Precio de referencia" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control m-2" placeholder="Moneda" />
                    </div>
                </div>
        }

        return (
            <div>
                <div className="form-group">
                    <div className="form-row text-center" key="0">
                        <div className="col-7 font-weight-bold">
                            <label htmlFor="name">Material</label>
                        </div>
                        <div className="col font-weight-bold">
                            <label htmlFor="quantity">Cantidad</label>
                        </div>
                        <div className="col font-weight-bold">
                            <label htmlFor="unitType">Unidad</label>
                        </div>
                        <div className="col font-weight-bold">
                            <label htmlFor="referencePrice">Precio de referencia</label>
                        </div>
                        <div className="col font-weight-bold">
                            <label htmlFor="referencePriceUnity">Moneda</label>
                        </div>
                    </div>
                    {optionTemplateItems}
                </div>
                <button onClick={this.submitForm} type="button" className="btn btn-primary">Guardar cambios</button>
            </div>
        )
    }
}

export default QuoteAddItemForm
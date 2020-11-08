import React from 'react'

class ModalItem extends React.Component {

  constructor(props) {
    super(props)
    this.closeButton = React.createRef();
  }

  closeModal = () => {
    this.closeButton.click()
  }

  render() {
    const onlyChild = React.Children.only(this.props.children)

    return (
      <div className="modal fade"
        id="itemModal"
        tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modificar los materiales de la cotización</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {React.cloneElement(onlyChild, { cleanup: this.closeModal })}
            </div>
            <div className="modal-footer">
              <button ref={(ele) => { this.closeButton = ele }} type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalItem

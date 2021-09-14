import React from 'react'

import { Modal } from "reactstrap";

function Notification({modalMessage, which}) {

    const [modal, setDemoModal] = React.useState(true)

    const bgColor = {"Succes": "#29facd", "Warning":"#ff9f89"}
    
    return (
        <div >
            <Modal isOpen={modal} >
                <div className="modal-header justify-content-center" style={{backgroundColor: which === "Success"?bgColor.Succes: bgColor.Warning}}>
                    <button className="close" onClick={() => setDemoModal(false)}>
                        <i className="tim-icons icon-simple-remove" />
                    </button>
                 <h4 className="title title-up" >Notifications</h4>
                </div>
                <div className="modal-body" style={{backgroundColor: which === "Success"?bgColor.Succes: bgColor.Warning}}>
                 <span data-notify="icon" className="tim-icons icon-trophy" />
                  <span> <b> {modalMessage} </b> </span>
                </div>
        </Modal>    
        </div>
    )
}

export default Notification

import React from "react"
import Modal from "react-modal"

Modal.setAppElement("#root");

 const ModalXL = ({modalisopen, setisopen}) => {
 

  return (
    <div className="modalXL">
     
      <Modal
        isOpen={modalisopen}
        onRequestClose={() => setisopen(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={500}
      >
        <button onClick={() => setisopen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}
export default ModalXL

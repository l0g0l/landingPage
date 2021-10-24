import React from "react"
import ReactModal from "react-modal"

ReactModal.setAppElement("#root");

const ModalXL = ({ modalisopen, setisopen, color, text1, text2, text3 }) => {
console.log(modalisopen, setisopen, color, text1, text2, text3)

  return (
    <div className="modalXL">

      <ReactModal
        isOpen={modalisopen}
        onRequestClose={() => setisopen(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{base: "content-base",afterOpen: "content-after",beforeClose:"content-before"}}
        closeTimeoutMS={100}
        style={{content: {
          background: '#A6FD17',
        }}}
        
    
      >
        <div className="txt">
          <p>{text1}</p>

          <p>{text2}</p>

          <p>{text3}</p>
        </div>



        <button onClick={() => setisopen(false)}>Close</button>
      </ReactModal>
    </div>
  );
}
export default ModalXL

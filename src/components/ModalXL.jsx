import React from "react"
import ReactModal from "react-modal"

ReactModal.setAppElement("#root");

const ModalXL = ({ modalisopen, setisopen, textsabout, textsskills, aboutmenuname }) => {
 

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
        className={{ base: "content-base", afterOpen: "content-after", beforeClose: "content-before" }}
        closeTimeoutMS={100}
        style={{
          content: {
            background: '#ff0571',
          }
        }}
      >

        <div className="txt" >
          {aboutmenuname
            ?
            textsabout.map((item, i) => (

              <p key={i}>{item}</p>

            ))
            :
            textsskills.map((item, i )=> (

              <p key={i}>{item}</p>

            ))
          }

        </div>



        <button onClick={() => setisopen(false)}>Close</button>
      </ReactModal>
    </div>
  );
}
export default ModalXL

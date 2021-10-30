import React from "react"
import ReactModal from "react-modal"
import ProgressBar from "./ProgressBar";

//Librería para montar el modal full screen del NavMenu
ReactModal.setAppElement("#root");

const ModalXL = ({ modalisopen, setisopen, textsabout, textsskills, aboutmenuname }) => {
  console.log(textsskills)


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
        {/*según el nombre del elemento del menú (aboutmenuname), pinta un texto u otro con el map */}
        <div className="txt" >
          {aboutmenuname
            ?
            textsabout.map((item, i) => (

              <p key={i}>{item}</p>

            ))
            :
            textsskills.map((item, i) => (
              <>


                <p key={i}>{item.text}</p>
                <div className="container-prog-img">

                  <ProgressBar />


                  <div className="container-img-cv-modalXL">

                    <img className="img-modalXL" src={item.img} alt="Mi foto" />
                    <a href={item.cv} download="CV LucíaG_WebDeveloper.pdf">Descárgate mi CV</a>

                  </div>
                </div>

              </>
            ))
          }
        </div>

        <button onClick={() => setisopen(false)}>Close</button>
      </ReactModal>
    </div>
  );
}
export default ModalXL

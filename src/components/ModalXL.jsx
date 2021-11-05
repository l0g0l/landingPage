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
            background: '#d0d0d0',
          }
        }}
      >
        {/*según el nombre del elemento del menú (aboutmenuname), pinta un texto u otro con el map */}
        <div className="txt" >
          {aboutmenuname
            ?
            textsabout.map((item, i) => (
              <>
                <div className="container-img-txt">
                    <img src={item.img} alt="mi foto" className="img-modalXL" />
                    <p key={i} clasName="txt-about" align="justify" style={{marginLeft:item.ml}} className="img-text">{item.text}
                    </p>

                </div>
                   

              </>

            ))
            :
            textsskills.map((item, i) => (
              <>
                <div className="container-prog-img">
                  <ProgressBar />
                  <div className="container-img-cv-modalXL">
                    <img src="https://img.icons8.com/plasticine/100/000000/resume.png" className="img-cv" alt="mi cv" />
                    <a className="cv" href={item.cv} download="CV LucíaG_WebDeveloper.pdf">Descárgate mi CV</a>
                  </div>
                  <p className="text-modal-skills" key={i}>{item.text}</p>
                </div>
              </>
            ))
          }
        </div>
       
        <button onClick={() => setisopen(false)} className="titleCloseBtnModalX">X</button>
        
      </ReactModal>
    </div>
  );
}
export default ModalXL

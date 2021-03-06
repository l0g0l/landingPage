import React from "react"
import ReactModal from "react-modal"
import logos from "../assets/img/logos.png"
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


//Librería para montar el modal full screen del NavMenu
ReactModal.setAppElement("#root");

const ModalXL = ({ modalisopen, setisopen, textsabout, textsskills, aboutmenuname }) => {
  console.log(textsskills)


  //hook para utilizar la libreria i18n para traducir la web
  const { t } = useTranslation()


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
            background: '#ffff',
          }
        }}
      >
        {/*según el nombre del elemento del menú (aboutmenuname), pinta un contenido*/}
        
          {aboutmenuname
            ?
            <>
            <div className="scrollmodalxl">

              <div className="container-img-txt">
                <div className="backgroundimg">
                  <img src={textsabout.img} alt="Me" className="img-modalXL" />
                </div>
                <div>
                  <p className="text-modal-about">{textsabout.text}</p>
                </div>

              </div>
            </div>
            </>
            :
            <>
              <div className="container-logos-txt">
                <div className="container-txt-cv">
                  <p className="text-modal-skills" >{textsskills.text}</p>
                  <div>
                    {t('modalxl.cv') === 'Download my cv'
                    ?
                    <a className="cv" href={textsskills.cv_English} download="CV LuciaG_WebDeveloper.pdf" >{t('modalxl.cv')}</a>
                    :
                    <a className="cv" href={textsskills.cv} download="CV LucíaG_DesarrolladoraWeb.pdf" >{t('modalxl.cv')}</a>
                    }
                  </div>
                </div>

                <div className="logos">
                  <img src={logos} alt="logos icons of all tecnologies that I know" className="logos-img" />
                </div>
              </div>

            </>

          }
    
        <button aria-label="Close" onClick={() => setisopen(false)} className="titleCloseBtnModalX">X</button>
      </ReactModal>
    </div>
  );
}
export default ModalXL

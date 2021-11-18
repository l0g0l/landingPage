import React from "react";
import girar from "../assets/img/girar.png"

import { useTranslation } from 'react-i18next' //traducir a otros idiomas


function Modal({ content, css }) {
  //hook para utilizar la libreria i18n para traducir la web
  const { t } = useTranslation()

  return (
    <>
      <div className={` ${css}`}>
        <div className="modalbackground">
          <div className="modalcontainer"  >
            <div className="colormodalprojects">
              <div className="titleclosebtn">
                <button aria-label="Close" onClick={() => { content.closeModal("") }}>
                  X
                </button>
              </div>
              <div className="title">
                <p>{content.title}</p>
              </div>
            </div>
            <div className="body" >
              <div>
                <span>{content.text}
                  <br />

                </span>
              </div>

              <div className="card">
                <div className="front">

                  <img src={content.img} alt={content.title} className="img-modal" />
                </div>
                <div className="back" >
                  <div>
                    <p><strong>{t('modal.tecnolog')}:</strong></p>
                  </div>
                  <div>
                    <p>  {content.tecnolog}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-icon-btn">
              <div>
                <img src={girar} alt="icon to round card" className="roundicon" />
              </div>
              <div>
                <button className="footer" >
                  <a href={content.url} target="_blank" rel="noreferrer noopener" className="linkproject">{t('modal.viewapp')}</a>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
export default Modal;



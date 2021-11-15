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
            <div className="colormodalprojects" style={{ marginBottom: content.mbt, backgroundColor: content.bcc }}>
              <div className="titleclosebtn">
                <button onClick={() => { content.closeModal("") }}>
                  X
                </button>
              </div>
              <div className="title" style={{ letterSpacing: content.ls, fontSize: content.fs }} >
                <p>{content.title}</p>
              </div>
            </div>
            <div className="body" style={{ marginBottom: content.mb, display: content.displayflex }} >
              <div>
                <span>{content.text}
                  <br />

                </span>
              </div>

              <div className="card" style={{ width: content.width, height: content.height, marginLeft: content.ml, marginTop: content.mt }}>
                <div className="front">

                  <img src={content.img} alt={content.title} className="img-modal" style={{ border: content.brd, width: content.width, marginRight: content.mr }} />
                </div>
                <div className="back" style={{ marginBottom: content.mbb }}>
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
                <img src={girar} alt="icono para girar la imagen" className="roundicon" style={{ bottom: content.icn_bt, right: content.icn_rg }} />
              </div>
              <div>
                <button className="footer" style={{ backgroundColor: content.bcc }}>
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



import React from "react";
import { useTranslation } from 'react-i18next' //traducir a otros idiomas



function Modal({ content }) {
  //hook para utilizar la libreria i18n para traducir la web
  const { t } = useTranslation()

  return (
    <div className="modalBackground" style={{ left: content.left, right: content.right }}>

        <div className="modalContainer"  >
      <div className="colormodalprojects" style={{marginBottom:content.mbt, backgroundColor: content.bcc}}>
          <div className="titleCloseBtn">
            <button onClick={() => { content.closeModal(false) }}>
              X
            </button>
          </div>
          <div className="title" style={{letterSpacing: content.ls, fontSize: content.fs }} >
            <p>{content.title}</p>
          </div>
        </div>
        <div className="body" style={{ marginBottom: content.mb, display: content.displayflex }} >
          <div>
            <span>{content.text}
              <br />

            </span>
          </div>

          <div className="card" style={{width: content.width, height: content.height, marginLeft: content.ml, marginTop: content.mt }}>
            <div className="front">

              <img src={content.img} alt={content.title} className="img-modal" style={{ border: content.brd,  width: content.width, marginRight: content.mr }} />
            </div>
            <div className="back" style={{ marginBottom: content.mbb}}>
              <div>
                <p><strong>{t('modal.tecnolog')}:</strong></p>
              </div>
              <div>
                <p>  {content.tecnolog}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="footer" style={{ backgroundColor: content.bcc}}>
          <a href={content.url} target="_blank" rel="noreferrer noopener" className="linkproject">{t('modal.viewapp')}</a>
        </button>
      </div>
    </div>
  )
}
export default Modal;



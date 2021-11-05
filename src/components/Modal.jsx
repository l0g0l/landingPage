import React from "react";


function Modal({ content }) {

  return (
    <div className="modalBackground" style={{ left: content.left, right: content.right }}>
      <div className="modalContainer"  >
        <div className="titleCloseBtn">
          <button onClick={() => { content.closeModal(false) }}>
            X
          </button>
        </div>
        <div className="title" style={{ marginBottom: content.mbt, letterSpacing: content.ls, fontSize: content.fs }} >
          <p>{content.title}</p>
        </div>
        <div className="body" style={{ display: content.displayflex }} >
          <div>
            <span>{content.text}
              <br />

            </span>
          </div>

          <div className="card" style={{ width: content.width, height: content.height, marginLeft: content.ml, marginTop: content.mt }}>
            <div className="front">

              <img src={content.img} alt={content.title} className="img-modal" style={{ width: content.width, marginRight: content.mr }} />
            </div>
            <div className="back">
              <div>
                <p><strong>Tecnologías:</strong></p>
              </div>
              <div>
                <p>  {content.tecnolog}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <a href={content.url} target="_blank" rel="noreferrer noopener">View Web Application</a>
        </div>
      </div>
    </div>
  )
}

export default Modal;



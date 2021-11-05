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
        <div className="body" >
          <div>

            <span style={{ marginBottom: content.mb }}>{content.text}
              <br />

            </span>
          </div>
       
            <div className="card">
              <div className="front">

                <img src={content.img} alt={content.title} className="img-modal" style={{ width: content.width, marginTop: content.mt, marginRight: content.mr }} />
              </div>
              <div className="back">
                <div>

                  <p><bold>Tecnologías:</bold></p>
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



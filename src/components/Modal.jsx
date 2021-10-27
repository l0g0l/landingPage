import React from "react";


function Modal({ content }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer" >
        <div className="titleCloseBtn">
          <button onClick={() => { content.closeModal(false) }}>
            X
          </button>
        </div>
        <div className="title">
          <p>{content.title}</p>
        </div>
        <div className="body">
          <div></div>
          <span>{content.text}
            <br />
            <strong>Tecnologías</strong>:
            {content.tecnolog}
          </span>
          <img src={content.img} alt="home dontWaste app" className="img-modal" />
        </div>
        <div className="footer">
          <a href={content.url} target="_blank" rel="noreferrer noopener">View Web Application</a>

        </div>
      </div>
    </div>
  )
}

export default Modal;



import React from "react";


function Modal({ closeModal, title, text, tecnolog, img, url }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
          <button onClick={() => { closeModal(false)}}>
            X
          </button>
        <div className="titleCloseBtn">
       
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="body">
          <div></div>
          <span>{text}
            <br />
            <strong>Tecnologías</strong>:
           {tecnolog}
          </span>

          <img src={img} alt="home coELA app" className="img-modal" />
        </div>
        <div className="footer">
          <a href={url} target="_blank" rel="noreferrer noopener">View Web Application</a>

        </div>
      </div>
    </div>
  );
}

export default Modal;



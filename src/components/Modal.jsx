import React from "react";


function Modal({ closeModal, url }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => { closeModal(false) }}>
            X
          </button>
         
        </div>
        <div className="title">
          <p>coELA</p>
        </div>
        <div className="body">
          <div></div>
          <span>Aplicación Web que le permite desde hacer donaciones instantáneas, hasta integrar la aplicación con su entidad bancaria.
            <br />
            <strong>Tecnologías</strong>:
            React js,
            React Form Hooks,
            Node js (Framework Express),
            BBDD Mongodb,
            JWT,
            Heroku (despliegue)
          </span>

          <img src="/img/modals/coELA-home.png" alt="home coELA app" className="img-modal" />
        </div>
        <div className="footer">
          <a href="https://coela.herokuapp.com/" target="_blank" rel="noreferrer noopener">View Web Application</a>

        </div>
      </div>
    </div>
  );
}

export default Modal;



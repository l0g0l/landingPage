import React from "react";


function Modal({ coela, dontwaste, quiz, maquetacion, buscador, npm, hackathon }) {


  // según la prop recibida, muestro una info u otra
  return (
    <div className="modalBackground">
      {dontwaste
        ?
      
        <div className="modalContainer" >
          <div className="titleCloseBtn">
            <button onClick={() => { dontwaste.closeModal(false) }}>
              X
            </button>
      
          </div>
          <div className="title">
            <p>{dontwaste.title}</p>
          </div>
          <div className="body">
            <div></div>
            <span>{dontwaste.text}
              <br />
              <strong>Tecnologías</strong>:
              {dontwaste.tecnolog}
            </span>
      
            <img src={dontwaste.img} alt="home dontWaste app" className="img-modal" />
          </div>
          <div className="footer">
            <a href={dontwaste.url} target="_blank" rel="noreferrer noopener">View Web Application</a>
      
          </div>
        </div>
      
        :
      
        null}
        
      {coela
        ?
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => { coela.closeModal(false) }}>
              X
            </button>

          </div>
          <div className="title">
            <p>{coela.title}</p>
          </div>
          <div className="body">
            <div></div>
            <span>{coela.text}
              <br />
              <strong>Tecnologías</strong>:
              {coela.tecnolog}
            </span>

            <img src={coela.img} alt="home coELA app" className="img-modal" />
          </div>
          <div className="footer">
            <a href={coela.url} target="_blank" rel="noreferrer noopener">View Web Application</a>

          </div>
        </div>

        :

        null}


      {quiz 
          ?

          <div className="modalContainer"  >
            <div className="titleCloseBtn">
              <button onClick={() => { quiz.closeModal(false) }}>
                X
              </button>

            </div>
            <div className="title">
              <p>{quiz.title}</p>
            </div>
            <div className="body">
              <div></div>
              <span>{quiz.text}
                <br />
                <strong>Tecnologías</strong>:
                {quiz.tecnolog}
              </span>

              <img src={quiz.img} alt="home dontWaste app" className="img-modal" />
            </div>
            <div className="footer">
              <a href={quiz.url} target="_blank" rel="noreferrer noopener">View Web Application</a>

            </div>
          </div>

          :

          null}

    </div>
  );
}

export default Modal;



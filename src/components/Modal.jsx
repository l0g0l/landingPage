import React from "react";


function Modal({ coela, dontwaste, blog }) {
  console.log(blog)

  // según la prop recibida, muestro una info u otra
  return (
    <div className="modalBackground">
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

      {blog 
          ?

          <div className="modalContainer"  >
            <div className="titleCloseBtn">
              <button onClick={() => { blog.closeModal(false) }}>
                X
              </button>

            </div>
            <div className="title">
              <p>{blog.title}</p>
            </div>
            <div className="body">
              <div></div>
              <span>{blog.text}
                <br />
                <strong>Tecnologías</strong>:
                {blog.tecnolog}
              </span>

              <img src={blog.img} alt="home dontWaste app" className="img-modal" />
            </div>
            <div className="footer">
              <a href={blog.url} target="_blank" rel="noreferrer noopener">View Web Application</a>

            </div>
          </div>

          :

          null}

    </div>
  );
}

export default Modal;



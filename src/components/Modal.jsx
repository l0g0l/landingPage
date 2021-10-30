import React from "react";


function Modal({ content }) {

  return (
    <div className="modalBackground" style={{left:content.right}}>
      <div className="modalContainer"  >
        <div className="titleCloseBtn">
          <button onClick={() => { content.closeModal(false) }}>
            X
          </button>
        </div>
        <div className="title" style={{ marginBottom: content.mb, letterSpacing: content.ls }} >
          <p>{content.title}</p>
        </div>
        <div className="body"style={{ display: content.displayflex }} >
          
          <span style={{ marginBottom: content.mb }}>{content.text}
            <br />
            <strong>Tecnologías</strong>:
            {content.tecnolog}
          </span>
          <div style={{  marginRight:content.mr}} >

          <img src={content.img} alt={content.title} className="img-modal" style={{ width: content.width, marginTop:content.mt, marginRight:content.mr}} />
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



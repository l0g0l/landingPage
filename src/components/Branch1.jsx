import { useState } from 'react'
import Modal from './Modal'

const Branch1 = ({ display, position, top, left, project }) => {
  
    const [modalOpenCoela, setModalOpenCoela] = useState(false)//comienza en false para que no se muestre
    const [modalOpenDW, setModalOpenDW] = useState(false)


    // incluyo en el onClick los dos states para que se cambien al clicar en cada botón. SOLO me ha funcionado cuando he cambiado la linea 35 modalOpen==='DontWaste no funcionaba. Paso una única props como un obj
    return (
        <div className=' branch1'>
            <button
                onClick={() => {
                    setModalOpenCoela(!modalOpenCoela)
                    setModalOpenDW(!modalOpenDW)
                }}
                className=' commit-main'
                style={{ display: display, position: position, top: top, left: left }}>
            </button>

            {modalOpenCoela && project === 'coELA'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenCoela,
                            title: 'coELA',
                            text: 'Aplicación Web (Mobile First) que le permite desde hacer donaciones instantáneas, hasta integrar la aplicación con su entidad bancaria.',
                            tecnolog: 'HTML/CSS,JavaScript, React js,React Form Hooks,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                            img: '/img/modals/coELA-home.png',
                            url: 'https://coela.herokuapp.com/'
                        }} 
                    />
                </>
                :
                null}

            {modalOpenDW && project !== 'coELA'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenDW,
                            title: 'DontWaste',
                            text: 'Creación de una aplicación web de recetas (Mobile First) cuyo motor de búsqueda proporciona recetas según el ingrediente o ingredientes que se seleccionen, pudiendo filtrar también por el tipo de alimento que se desea así como por los alérgenos.',
                            tecnolog: 'HTML/CSS,JavaScript, React js,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                            img: '/img/modals/dontWaste.gif',
                            url: 'https://dontwasteapp.herokuapp.com/'
                        }} 
                    />
                </>
                :
                null}

        </div>
    )
}

export default Branch1

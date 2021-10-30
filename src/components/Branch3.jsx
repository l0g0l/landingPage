import { useState } from 'react'
import Modal from './Modal'

const Branch3 = ({ display, position, top, left, project }) => {

    const [modalOpenBlog, setModalOpenBlog] = useState(false)
    const [modalOpenAgencia, setModalOpenAgencia] = useState(false)
    const [modalOpenPatientM, setModalOpenPatientM] = useState(false)

    // incluyo en el onClick los dos states para que se cambien al clicar en cada botón. SOLO me ha funcionado cuando he cambiado la linea 35 modalOpen==='DontWaste no funcionaba. Paso una única props como un obj
    return (
        <div className=' branch3'>
            <button
                onClick={() => {
                    setModalOpenBlog(!modalOpenBlog)
                    setModalOpenAgencia(!modalOpenAgencia)
                    setModalOpenPatientM(!modalOpenPatientM)
                }}
                className=' commit-main'
                style={{ display: display, position: position, top: top, left: left }}>
            </button>

            {modalOpenBlog && project === 'De secre a Developer'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenBlog,
                            title: 'De Secre a Develop',
                            text: 'Creación de mi propio Blog web app.',
                            tecnolog: 'HTML/CSS,JavaScript, React js, Node js (Framework Express), BBDD Mongodb (Mongoose), GridfsFS, Multer, JWT. Deploy (Heroku)',
                            img: '/img/modals/blog.gif',
                            url: 'https://desecreadeveloperblog.herokuapp.com/',
                            width: '370px',
                            displayflex: 'unset',
                            mt: '12px',
                            ls:'-2px',
                            mbt:'20px'
                        }}
                    />
                </>
                :
                null}

            {modalOpenAgencia && project === 'Agencia de Viajes'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenAgencia,
                            title: 'Agencia de Viajes',
                            text: 'Creación de una web de Agencia de Viajes, se pueden añadir opiniones sobre experiencias vacacionales.',
                            tecnolog: 'HTML/CSS, JavaScript, PUG (Template Engine), Node js (Framework Express), BBDD SQL (Sequelize). Deploy (Heroku)',
                            img: '/img/modals/agencia.gif',
                            url: 'https://pure-savannah-13335.herokuapp.com/',
                            width: '370px',
                            displayflex: 'unset',
                            mt: '12px',
                            mbt:'10px'
                        }}
                    />
                </>
                :
                null}


            {modalOpenPatientM && project === 'Gestor de citas'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenPatientM,
                            title: 'Gestor de citas',
                            text: 'Creación de un gestor de citas. Se puede registrar una cita, mostrar y eliminar. Responsive.',
                            tecnolog: 'HTML Bootstrap, JavaScript, React js,Node js (Framework Express),BBDD Mongodb (Mongoose), Heroku (despliegue)',
                            img: '/img/modals/patient.gif',
                            url: 'https://veterinarypatientsmanager.herokuapp.com/',
                            width: '370px',
                            displayflex: 'unset',
                            mt: '12px',
                            mbt:'20px'
                            
                        }}
                    />
                </>
                :
                null}

        </div>
    )
}

export default Branch3


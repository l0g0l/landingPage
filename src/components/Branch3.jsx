import { useState } from 'react'
import Modal from './Modal'

const Branch3 = ({ display, position, top, left, project, boxcolor,  background }) => {

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
                style={{ display: display, position: position, top: top, left: left, boxShadow: boxcolor, backgroundColor:background }}>
            </button>

            {modalOpenBlog && project === 'De Secre a Developer'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenBlog,
                            title: 'Blog De Secre a Developer',
                            text: 'Creación de mi propio Blog web app.',
                            tecnolog: 'HTML/CSS, JavaScript, React js, Node js (Framework Express), BBDD Mongodb (Mongoose), GridfsFS, Multer, JWT. Deploy (Heroku)',
                            img: '/img/modals/blog.gif',
                            url: 'https://desecreadeveloperblog.herokuapp.com/',
                            width: '100%',
                            height:'500%',
                            displayflex: 'unset',
                            mt: '20px',
                            ls:'-2px',
                            mbt:'30px',
                            fs:'27px',
                            ml:'unset'
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
                            width: '100%',
                            height:'300%',
                            displayflex: 'unset',
                            mt: '20px',
                            mbt:'30px',
                            ml:'unset'
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
                            tecnolog: 'HTML Bootstrap, JavaScript, React js,Node js (Framework Express),BBDD Mongodb (Mongoose). Deploy (Heroku)',
                            img: '/img/modals/patient.gif',
                            url: 'https://veterinarypatientsmanager.herokuapp.com/',
                            width: '100%',
                            height:'300%',
                            displayflex: 'unset',
                            mt: '20px',
                            mbt:'30px',
                            ml:'unset'
                            
                        }}
                    />
                </>
                :
                null}

        </div>
    )
}

export default Branch3


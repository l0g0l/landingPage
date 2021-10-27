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
                        Hackathon={{
                            closeModal: setModalOpenBlog,
                            title: 'De secre a Developer',
                            text: 'Aplicación Web (Mobile First) que le permite desde hacer donaciones instantáneas, hasta integrar la aplicación con su entidad bancaria.',
                            tecnolog: 'HTML/CSS,JavaScript, React js,React Form Hooks,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                            img: '/img/modals/coELA-home.png',
                            url: 'https://coela.herokuapp.com/'
                        }}
                    />
                </>
                :
                null}

            {modalOpenAgencia && project !== 'Agencia de Viajes'
                ?
                <>
                    <Modal
                        npm={{
                            closeModal: setModalOpenAgencia,
                            title: 'Agencia de Viajes',
                            text: 'Creación de una aplicación web de recetas (Mobile First) cuyo motor de búsqueda proporciona recetas según el ingrediente o ingredientes que se seleccionen, pudiendo filtrar también por el tipo de alimento que se desea así como por los alérgenos.',
                            tecnolog: 'HTML/CSS,JavaScript, React js,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                            img: '/img/modals/dontWaste.gif',
                            url: 'https://dontwasteapp.herokuapp.com/'
                        }}
                    />
                </>
                :
                null}


            {modalOpenPatientM && project !== 'Gestor de citas'
                ?
                <>
                    <Modal
                        buscador={{
                            closeModal: setModalOpenPatientM,
                            title: 'Gestor de citas',
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

export default Branch3


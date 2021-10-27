import { useState } from 'react'
import Modal from './Modal'

const Branch2 = ({ display, position, top, left, project }) => {
  
    const [modalOpenHac, setModalOpenHac] = useState(false)
    const [modalOpenNPM, setModalOpenNPM] = useState(false)
    const [modalOpenBuscRep, setModalOpenBuscRep] = useState(false)
    const [modalOpenMaqAv, setModalOpenMaqAv] = useState(false)

    // incluyo en el onClick los dos states para que se cambien al clicar en cada botón. SOLO me ha funcionado cuando he cambiado la linea 35 modalOpen==='DontWaste no funcionaba. Paso una única props como un obj
    return (
        <div className=' branch2'>
            <button
                onClick={() => {
                    setModalOpenHac(!modalOpenHac)
                    setModalOpenNPM(!modalOpenNPM)
                    setModalOpenBuscRep(!modalOpenBuscRep)
                    setModalOpenMaqAv(!modalOpenMaqAv)
                }}
                className=' commit-main'
                style={{ display: display, position: position, top: top, left: left }}>
            </button>

            {modalOpenHac && project === 'Hackathon(Nuwe)'
                ?
                <>
                    <Modal
                        Hackathon={{
                            closeModal: setModalOpenHac,
                            title: 'Hackathon(Nuwe)',
                            text: 'Aplicación Web (Mobile First) que le permite desde hacer donaciones instantáneas, hasta integrar la aplicación con su entidad bancaria.',
                            tecnolog: 'HTML/CSS,JavaScript, React js,React Form Hooks,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                            img: '/img/modals/coELA-home.png',
                            url: 'https://coela.herokuapp.com/'
                        }} 
                    />
                </>
                :
                null}

            {modalOpenNPM && project !== 'NPM Clone'
                ?
                <>
                    <Modal
                        npm={{
                            closeModal: setModalOpenNPM,
                            title: 'NPM Clone',
                            text: 'Creación de una aplicación web de recetas (Mobile First) cuyo motor de búsqueda proporciona recetas según el ingrediente o ingredientes que se seleccionen, pudiendo filtrar también por el tipo de alimento que se desea así como por los alérgenos.',
                            tecnolog: 'HTML/CSS,JavaScript, React js,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                            img: '/img/modals/dontWaste.gif',
                            url: 'https://dontwasteapp.herokuapp.com/'
                        }} 
                    />
                </>
                :
                null}


            {modalOpenBuscRep && project !== 'Buscador de repos'
                ?
                <>
                    <Modal
                        buscador={{
                            closeModal: setModalOpenBuscRep,
                            title: 'Buscador de repos',
                            text: 'Creación de una aplicación web de recetas (Mobile First) cuyo motor de búsqueda proporciona recetas según el ingrediente o ingredientes que se seleccionen, pudiendo filtrar también por el tipo de alimento que se desea así como por los alérgenos.',
                            tecnolog: 'HTML/CSS,JavaScript, React js,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                            img: '/img/modals/dontWaste.gif',
                            url: 'https://dontwasteapp.herokuapp.com/'
                        }} 
                    />
                </>
                :
                null}

            {modalOpenMaqAv && project !== 'Maquetación Avanzada'
                ?
                <>
                    <Modal
                        maquetacion={{
                            closeModal: setModalOpenMaqAv,
                            title: 'Maquetación Avanzada',
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

export default Branch2 


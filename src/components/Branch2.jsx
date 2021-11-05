import { useState } from 'react'
import Modal from './Modal'

const Branch2 = ({ display, position, top, left, project, boxcolor,  background  }) => {

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
                style={{ display: display, position: position, top: top, left: left, boxShadow: boxcolor, backgroundColor:background }}>
            </button>

            {modalOpenHac && project === 'Hackathon(Nuwe)'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenHac,
                            title: 'Hackathon(Nuwe)',
                            text: 'Clon de una pasarela de registro, flujo de navegación sin persistencia de datos, Responsive.',
                            tecnolog: 'HTML/CSS, JavaScript, React js. Deploy (Heroku)',
                            img: 'img/modals/hackathon.gif',
                            url: 'https://hackathon-mwc.herokuapp.com/',
                            left:'-450px',
                            width: '100%',
                            height:'250%',
                            displayflex: 'unset',
                            mt: '20px', 
                            mbt:'30px',
                            ml:'unset'
                        }}
                    />
                </>
                :
                null}

            {modalOpenNPM && project === 'NPM Clone'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenNPM,
                            title: 'NPM Clone',
                            text: 'Clon de una landing page utilizando únicamente HTML y CSS. Responsive.',
                            tecnolog: 'HTML y CSS. Deploy (GitHubPages)',
                            img: 'img/modals/npmclone.gif',
                            url: 'https://l0g0l.github.io/cloneWebsiteNPM/',
                            left:'-450px',
                            width: '100%',
                            height:'250%',
                            displayflex: 'unset',
                            mt: '20px', 
                            mbt:'30px',
                            ml:'unset'
                        }}
                    />
                </>
                :
                null}


            {modalOpenBuscRep && project === 'Buscador de repos'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenBuscRep,
                            title: 'Buscador GitHub',
                            text: 'Buscador de repositorios en GitHub. FrontEnd app. SPA (single page application), almacenamiento de datos en LocalStorage. ',
                            tecnolog: 'HTML/CSS (Flex Grid), JavaScript y React js. Deploy (Heroku)',
                            img: 'img/modals/repos.gif',
                            url: 'https://githubrepositoryfinder.herokuapp.com/',
                            left:'-450px',
                            width: '100%',
                            height:'250%',
                            displayflex: 'unset',
                            mt: '10px',
                            mbt:'20px',
                            ml:'unset'
                        }}
                    />
                </>
                :
                null}

            {/* {modalOpenMaqAv && project === 'Maquetación Avanzada'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenMaqAv,
                            title: 'Maquetación Avanzada',
                            text: 'Creación de una aplicación web de recetas (Mobile First) cuyo motor de búsqueda proporciona recetas según el ingrediente o ingredientes que se seleccionen, pudiendo filtrar también por el tipo de alimento que se desea así como por los alérgenos.',
                            tecnolog: 'HTML/CSS,JavaScript, React js,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                            img: 'img/modals/dontWaste.gif',
                            url: 'https://dontwasteapp.herokuapp.com/',
                            right: '-448px',
                            left:'0px'
                        }} 
                    />
                </>
                :
                null} */}

        </div>
    )
}

export default Branch2


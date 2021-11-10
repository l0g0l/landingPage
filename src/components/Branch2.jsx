import { useState } from 'react'
import Modal from './Modal'
import repos from '../assets/img/modals/repos.gif'
import npmclone from '../assets/img/modals/npmclone.gif'
import hackathon from '../assets/img/modals/hackathon.gif'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const Branch2 = ({ display, position, top, left, project, boxcolor, background }) => {

    const [modalOpenHac, setModalOpenHac] = useState(false)
    const [modalOpenNPM, setModalOpenNPM] = useState(false)
    const [modalOpenBuscRep, setModalOpenBuscRep] = useState(false)
    const [modalOpenMaqAv, setModalOpenMaqAv] = useState(false)

    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()


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
                style={{ display: display, position: position, top: top, left: left, boxShadow: boxcolor, backgroundColor: background }}>
            </button>

            {modalOpenHac && project === 'Hackathon(Nuwe)'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setModalOpenHac,
                            title: 'Hackathon(Nuwe)',
                            text: t('branch2.txthack'),
                            tecnolog: 'HTML/CSS, JavaScript, React js. Deploy (Heroku)',
                            img: hackathon,
                            url: 'https://hackathon-mwc.herokuapp.com/',
                            left: '-450px',
                            width: '100%',
                            height: '250%',
                            displayflex: 'unset',
                            mt: '20px',
                            mbt: '30px',
                            mb:'1450px',
                            ml: 'unset',
                            bcc:'rgb(196, 230, 142)'
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
                            text: t('branch2.txtnpm'),
                            tecnolog: 'HTML y CSS. Deploy (GitHubPages)',
                            img: npmclone,
                            url: 'https://l0g0l.github.io/cloneWebsiteNPM/',
                            left: '-450px',
                            width: '100%',
                            height: '250%',
                            displayflex: 'unset',
                            mt: '20px',
                            mb:'145px',
                            mbt: '30px',
                            ml: 'unset',
                            bcc:'rgb(196, 230, 142)'
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
                            text: t('branch2.txtbgit'),
                            tecnolog: 'HTML/CSS (Flex Grid), JavaScript y React js. Deploy (Heroku)',
                            img: repos,
                            url: 'https://githubrepositoryfinder.herokuapp.com/',
                            left: '-450px',
                            width: '100%',
                            height: '250%',
                            displayflex: 'unset',
                            mt: '10px',
                            mb:'145px',
                            mbt: '20px',
                            ml: 'unset',
                            bcc:'rgb(196, 230, 142)'
                        }}
                    />
                </>
                :
                null}
        </div>
    )
}
export default Branch2


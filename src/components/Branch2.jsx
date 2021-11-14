import Modal from './Modal'
import repos from '../assets/img/modals/repos.gif'
import npmclone from '../assets/img/modals/npmclone.gif'
import hackathon from '../assets/img/modals/hackathon.gif'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const Branch2 = ({ display, position, top, left, project, boxcolor, background, modales, setmodales }) => {


    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()


    // incluyo en el onClick los dos states para que se cambien al clicar en cada botón. SOLO me ha funcionado cuando he cambiado la linea 35 modalOpen==='DontWaste no funcionaba. Paso una única props como un obj
    return (
        <div className=' branch2'>
            <button
                onClick={() => {
                    console.log(`${modales} - ${project}`)
                    if (modales === project) {
                        setmodales("")
                    } else {
                        setmodales(project)
                    }
                }}
                className=' commit-main'
                style={{ display: display, position: position, top: top, left: left, boxShadow: boxcolor, backgroundColor: background }}>
            </button>

            {modales === project && project === 'Hackathon(Nuwe)'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setmodales,
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
                            mb: '208px',
                            ml: 'unset',
                            bcc: 'rgb(201, 233, 150)',
                            brd: '1px solid #cac7c7dd',
                            icn_bt: '62px',
                            icn_rg: '18px'
                        }}
                    />
                </>
                :
                null}

            {modales === project && project === 'NPM Clone'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setmodales,
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
                            mb: '208px',
                            mbt: '30px',
                            ml: 'unset',
                            bcc: 'rgb(201, 233, 150)',
                            icn_bt: '62px',
                            icn_rg: '18px'

                        }}
                    />
                </>
                :
                null}


            {modales === project && project === 'Buscador de repos'
                ?
                <>
                    <Modal
                        content={{
                            closeModal: setmodales,
                            title: 'Buscador GitHub',
                            text: t('branch2.txtbgit'),
                            tecnolog: 'HTML/CSS (Flex Grid), JavaScript y React js. Deploy (Heroku)',
                            img: repos,
                            url: 'https://githubrepositoryfinder.herokuapp.com/',
                            left: '-454px',
                            width: '100%',
                            height: '250%',
                            displayflex: 'unset',
                            mt: '10px',
                            mb: '210px',
                            mbt: '20px',
                            ml: 'unset',
                            bcc: 'rgb(201, 233, 150)',
                            icn_bt: '44px',
                            icn_rg: '18px'
                        }}
                    />
                </>
                :
                null}
        </div>
    )
}
export default Branch2


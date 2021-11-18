import Modal from './Modal'
import repos from '../assets/img/modals/repos.gif'
import npmclone from '../assets/img/modals/npmclone.gif'
import hackathon from '../assets/img/modals/hackathon.gif'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const Branch2 = ({ project, modales, setmodales, css }) => {


    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()


    return (
        <div className={` ${css}`}>
            <div className=' branch2'>
                <button
                   aria-label="Click" onClick={() => {
                        if (modales === project) {
                            setmodales("")
                        } else {
                            setmodales(project)
                        }
                    }}
                    className=' commit-main'>
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
                            }}
                            css={'branch2propscsshack'}
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
                            }}
                            css={'branch2propscssnpm'}
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
                            }}
                            css={'branch2propscssrepos'}
                        />
                    </>
                    :
                    null}
            </div>
        </div>
    )
}
export default Branch2


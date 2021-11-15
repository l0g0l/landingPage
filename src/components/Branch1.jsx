import Modal from './Modal'
import coELA from '../assets/img/modals/coELA.png'
import dontwaste from '../assets/img/modals/dontwaste.gif'

import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const Branch1 = ({ project, modales, setmodales, css }) => {

    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()


    // incluyo en el onClick los dos states para que se cambien al clicar en cada botón. SOLO me ha funcionado cuando he cambiado la linea 35 modalOpen==='DontWaste no funcionaba. Paso una única props como un obj
    return (
        <div className={` ${css}`}>
            <div className=' branch1'>
                <button
                    onClick={() => {
                        if (modales === project) {
                            setmodales("")
                        } else {
                            setmodales(project)
                        }
                    }}
                    className=' commit-main'>
                </button>

                {modales === project && project === 'coELA'
                    ?
                    <>
                        <Modal
                            content={{
                                closeModal: setmodales,
                                title: 'coELA',
                                text: t('branch1.txtcoela'),
                                tecnolog: 'HTML/CSS, JavaScript, React js, React Form Hooks, Node js (Framework Express), BBDD Mongodb (Mongoose), JWT. Deploy (Heroku)',
                                img: coELA,
                                url: 'https://coela.herokuapp.com/',
                                width: '150%',
                                height: '280%',
                                mbt: '100px',
                                mb: '105px',
                                bcc: 'rgb(211, 206, 250)',
                                icn_bt: '21px',
                                icn_rg: '18px'

                            }}
                        />
                    </>
                    :
                    null}

                {modales === project && project !== 'coELA'
                    ?
                    <>
                        <Modal
                            content={{
                                closeModal: setmodales,
                                title: 'Don\'t Waste',
                                text: t('branch1.txtdontw'),
                                tecnolog: 'HTML/CSS, JavaScript, React js, Node js (Framework Express), BBDD Mongodb (Mongoose), JWT. Deploy(Heroku)',
                                img: dontwaste,
                                url: 'https://dontwasteapp.herokuapp.com/',
                                mbt: '66px',
                                mb: '67px',
                                bcc: 'rgb(211, 206, 250)',
                                brd: '1px solid #cac7c7dd',
                                icn_bt: '21px',
                                icn_rg: '18px'
                            }}
                        />
                    </>
                    :
                    null}
            </div>
        </div>
    )
}
export default Branch1

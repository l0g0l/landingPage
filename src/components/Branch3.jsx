import Modal from './Modal'
import patient from '../assets/img/modals/patient.gif'
import agencia from '../assets/img/modals/agencia.gif'
import blog from '../assets/img/modals/blog.gif'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const Branch3 = ({ project, modales, setmodales, css }) => {


    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()

    // incluyo en el onClick los dos states para que se cambien al clicar en cada botón. SOLO me ha funcionado cuando he cambiado la linea 35 modalOpen==='DontWaste no funcionaba. Paso una única props como un obj
    return (
        <div className={` ${css}`}>
            <div className=' branch3'>
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

                {modales === project && project === 'De Secre a Developer'
                    ?
                    <>
                        <Modal
                            content={{
                                closeModal: setmodales,
                                title: 'Blog De Secre a Developer',
                                text: t('branch3.txtblog'),
                                tecnolog: 'HTML/CSS, JavaScript, React js, Node js (Framework Express), BBDD Mongodb (Mongoose), GridfsFS, Multer, JWT. Deploy (Heroku)',
                                img: blog,
                                url: 'https://desecreadeveloperblog.herokuapp.com/',
                            }}
                            css={'branch3propscssblog'}
                        />
                    </>
                    :
                    null}

                {modales === project && project === 'Agencia de Viajes'
                    ?
                    <>
                        <Modal
                            content={{
                                closeModal: setmodales,
                                title: 'Agencia de Viajes',
                                text: t('branch3.txtagencia'),
                                tecnolog: 'HTML/CSS, JavaScript, PUG (Template Engine), Node js (Framework Express), BBDD SQL (Sequelize). Deploy (Heroku)',
                                img: agencia,
                                url: 'https://pure-savannah-13335.herokuapp.com/',

                            }}
                            css={'branch3propscssviajes'}
                        />
                    </>
                    :
                    null}

                {modales === project && project === 'Gestor de citas'
                    ?
                    <>
                        <Modal
                            content={{
                                closeModal: setmodales,
                                title: 'Gestor de citas',
                                text: t('branch3.txtgestor'),
                                tecnolog: 'HTML Bootstrap, JavaScript, React js,Node js (Framework Express),BBDD Mongodb (Mongoose). Deploy (Heroku)',
                                img: patient,
                                url: 'https://veterinarypatientsmanager.herokuapp.com/',
                            }}
                            css={'branch3propscsscitas'}
                        />
                    </>
                    :
                    null}
            </div>
        </div>
    )
}
export default Branch3


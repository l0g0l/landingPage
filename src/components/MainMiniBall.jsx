import Modal from './Modal'

// import { Link } from 'react-router-dom'

const MainMiniBall = ({ top, func, funcmodal, modalstate }) => {
    console.log(modalstate)
    console.log(top, func, funcmodal)

    return (
        <>
            {top !== '850px'
                ?
                <div className="commit-main sx" style={{ top: top }} onClick={func}></div>

                :
                <div className="commit-main sx" style={{ top: top }} onClick={funcmodal}>
                    {modalstate === true
                    ?
                    <div  >
                        <Modal
                            blog={{
                                closeModal: funcmodal,
                                title: 'BLOG',
                                text: 'Aplicación Web (Mobile First) que le permite desde hacer donaciones instantáneas, hasta integrar la aplicación con su entidad bancaria.',
                                tecnolog: 'HTML/CSS,JavaScript, React js,React Form Hooks,Node js (Framework Express),BBDD Mongodb (Mongoose),JWT,Heroku (despliegue)',
                                img: '/img/modals/coELA-home.png',
                                url: 'https://coela.herokuapp.com/',
                                top: "850px"

                            }}
                        />
                    </div>
                    :
                    null}

                </div>
            }
        </>
    )
}

export default MainMiniBall

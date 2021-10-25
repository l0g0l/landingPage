import { useState } from 'react'
import Modal from './Modal'

const Branch = ({ display, position, top, left, project }) => {
    const [modalOpen, setModalOpen] = useState(false)//comienza en false para que no se muestre
    console.log(modalOpen)


    return (
        <>
            <div className=' branch-dev'>
                {/*recibo por props cada uno de los estilos css*/}
                <div >
                    <button onClick={() => setModalOpen(true)} className=' commit-main' style={{ display: display, position: position, top: top, left: left }}></button>
                </div>
                {/*cuando he hecho click, su estado pasa a true y, si es true, muéstrame el componente*/}

                {modalOpen && project === 'coELA'
                    ?
                    <>
                        <Modal closeModal={setModalOpen} title={'coELA'} text={'Aplicación Web que le permite desde hacer donaciones instantáneas, hasta integrar la aplicación con su entidad bancaria.'} tecnolog={'React js,React Form Hooks,Node js (Framework Express),BBDD Mongodb,JWT,Heroku (despliegue)'} img={'/img/modals/coELA-home.png'} url={'https://coela.herokuapp.com/'} />
                    </>
                    :
                    null}

            </div>
        </>
    )
}

export default Branch

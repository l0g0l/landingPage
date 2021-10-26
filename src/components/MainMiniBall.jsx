import Modal from './Modal'

const MainMiniBall = ({ quiz, branch1 }) => {



    //pasando modalstate, uso el state del padre aquí
    // con el primer ternario selecciono que haga un onClick u otro, en base a la posición del componente MainMiniBall y con el sigueinte ternario y el state hago que se muestre el modal o no
    return (
        <>
            {branch1 && branch1.top2 !== "850px"
                ?
                <div className="commit-main sx " style={{ top: branch1.top2 }} onClick={branch1.funcbranch}>
                    <div className="tooltip-container">
                        <div className="text" style={{ width: branch1.with2 }} >
                            <span >{branch1.tooltip2}</span>
                        </div>
                    </div>
                </div>

                :
                null}
            {quiz && <div className="commit-main sx " tabindex="0" style={{ top: quiz.top1 }} onClick={quiz.funcmodal}>
                <div className="tooltip-container">
                    <div className="text" style={{ left: quiz.size1, top: quiz.topminiball1, width: quiz.with1 }}>
                        <span >{quiz.tooltip1}</span>
                    </div>
                </div>
                {quiz.modalstate === true
                    ?
                    <div  >
                        <Modal
                            blog={{
                                closeModal: quiz.funcmodal,
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

import Modal from './Modal'
import quizfirebase from '../assets/img/modals/quizfirebase.gif'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const MainMiniBall = ({ quiz, css, branch1, branch1_1, branch2, branch2_2, branch3, branch3_3 }) => {
    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()

    // con el primer ternario selecciono que haga un onClick u otro, en base a la posición del componente MainMiniBall y con el siguiente ternario y el state hago que se muestre el modal o no

    return (
        <>
            {/*Empieza Branch3- 4 proyectos */}
            {branch3_3
                ?
                <div className={` ${css}`}><div className="commitmain-sx " ></div></div>
                :
                null}

            {branch3
                ?
                <div className={` ${css}`}><div className="commitmain-sx " aria-label="Click" role="button" tabindex="0" onClick={branch3.funcbranch3}>
                    <div className="tooltip-container">
                        <div className="text"  >
                            <span >{branch3.tooltip4}</span>
                        </div>
                    </div>
                </div>
                </div>
                :
                null}
            {/*Termina Branch3-4 proyectos */}

            {/*Empieza Branch2- 4 proyectos */}
            {branch2_2
                ?
                <div className={` ${css}`}><div className="commitmain-sx " ></div></div>
                :
                null}

            {branch2
                ?
                <div className={` ${css}`} ><div className="commitmain-sx " aria-label="Click" role="button" tabindex="0" onClick={branch2.funcbranch2}>
                    <div className="tooltip-container">
                        <div className="text" >
                            <span >{branch2.tooltip3}</span>
                        </div>
                    </div>
                </div>
                </div>
                :
                null}
            {/*Termina Branch2-4 proyectos */}

            {/*Empieza Branch1- 2 proyectos */}
            {branch1_1
                ?
                <div className={` ${css}`}><div className="commitmain-sx "></div></div>
                :
                null}

            {branch1
                ?
                <div className={` ${css}`}><div className="commitmain-sx " aria-label="Click" role="button" tabindex="0" onClick={branch1.funcbranch}>
                    <div className="tooltip-container">
                        <div className="text" >
                            <span >{branch1.tooltip2}</span>
                        </div>
                    </div>
                </div>
                </div>
                :
                null}
            {/*Termina Branch1-2 proyectos */}

            {/* Empieza Primer proyecto */}

            {quiz && <div className={` ${css}`}>
                <div className="commitmain-sx " aria-label="Click" role="button" tabindex="0" onClick={() => {
                    // console.log(`${quiz.modales} - ${quiz.project}`)
                    if (quiz.modales === quiz.project) {
                        quiz.setmodales("")
                    } else {
                        quiz.setmodales(quiz.project)
                    }
                }}>
                </div>
                <div className="tooltip-container">
                    <div className="text">
                        <span >{quiz.tooltip1}</span>
                    </div>
                </div>
                {quiz.modales === quiz.project && quiz.project === 'quiz'
                    ?
                    <div  >
                        <Modal
                            content={{
                                closeModal: quiz.setmodales,
                                title: 'Quiz-LocalStorage',
                                text: t('commit.ball.descrp'),
                                tecnolog: 'HTML/CSS y JavaScript. Deploy (GitHubPages)',
                                img: quizfirebase,
                                url: 'https://l0g0l.github.io/Quiz_LocalStorage/'
                            }}
                            css={'quizpropscss'}

                        />
                    </div>
                    :
                    null}
                {/* Termina Primer proyecto */}

            </div>
            }
        </>
    )
}
export default MainMiniBall

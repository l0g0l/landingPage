import Modal from './Modal'
import quizfirebase from '../assets/img/modals/quizfirebase.gif'

import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const MainMiniBall = ({ quiz, branch1, branch1_1, branch2, branch2_2, branch3, branch3_3}) => {
    console.log(quiz)
  

    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()

  
    // con el primer ternario selecciono que haga un onClick u otro, en base a la posición del componente MainMiniBall y con el sigueinte ternario y el state hago que se muestre el modal o no
    //tengo que poner que "existe branch1, (linea 9) y quiz (linea 21)" para que las props se reconozcan como propiedades del obj p.e. branch1.top2 o quiz.size1
    return (
        <>
            {/*Empieza Branch3- 4 proyectos */}
            {branch3_3 && branch3_3.top4_4 !== "850px"
                ?
                <div className="commitmain-sx " style={{  top: branch3_3.top4_4, cursor: "auto" }}></div>

                :
                null}

            {branch3 && branch3.top4 !== "850px"
                ?
                <div className="commitmain-sx " style={{ backgroundColor: branch3.bcc,top: branch3.top4 }} onClick={branch3.funcbranch3}>
                    <div className="tooltip-container">
                        <div className="text" style={{ width: branch3.with4, left: branch3.size4, top: branch3.topminiball4 }} >
                            <span >{branch3.tooltip4}</span>
                        </div>
                    </div>
                </div>

                :
                null}
            {/*Termina Branch3-4 proyectos */}

            {/*Empieza Branch2- 4 proyectos */}
            {branch2_2 && branch2_2.top3_3 !== "850px"
                ?
                <div className="commitmain-sx " style={{ top: branch2_2.top3_3, cursor: "auto" }}></div>

                :
                null}

            {branch2 && branch2.top3 !== "850px"
                ?
                <div className="commitmain-sx " style={{ backgroundColor: branch2.bcc, top: branch2.top3 }} onClick={branch2.funcbranch2}>
                    <div className="tooltip-container">
                        <div className="text" style={{ width: branch2.with3, right: branch2.size3, top: branch2.topminiball3 }} >
                            <span >{branch2.tooltip3}</span>
                        </div>
                    </div>
                </div>

                :
                null}
            {/*Termina Branch2-4 proyectos */}


            {/*Empieza Branch1- 2 proyectos */}
            {branch1_1 && branch1_1.top1_1 !== "850px"
                ?
                <div className="commitmain-sx " style={{  top: branch1_1.top1_1, cursor: "auto" }}></div>

                :
                null}

            {branch1 && branch1.top2 !== "850px"
                ?
                <div className="commitmain-sx " style={{ backgroundColor: branch1.bcc, top: branch1.top2 }} onClick={branch1.funcbranch}>
                    <div className="tooltip-container">
                        <div className="text" style={{ left: branch1.size1, width: branch1.with2, top: branch1.topminiball2 }} >
                            <span >{branch1.tooltip2}</span>
                        </div>
                    </div>
                </div>

                :
                null}
            {/*Termina Branch1-2 proyectos */}

            {/* Empieza Primer proyecto */}
            {quiz && <div className="commitmain-sx " style={{ backgroundColor: quiz.bcc, top: quiz.top1 }} onClick={() => {
                    console.log(`${quiz.modales} - ${quiz.project}`)
                    if (quiz.modales === quiz.project) {
                        quiz.setmodales("")
                    } else {
                        quiz.setmodales(quiz.project)
                    }
                }}>
                <div className="tooltip-container">
                    <div className="text" style={{ left: quiz.size1, top: quiz.topminiball1, width: quiz.width1 }}>
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
                                url: 'https://l0g0l.github.io/Quiz_LocalStorage/',
                                mbt: "72px",
                                mb: '75px',
                                left: '-480px',
                                bcc:'rgb(252, 175, 203)',
                                icn_bt:'39px',
                                icn_rg:'18px'
                            }}
                           
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

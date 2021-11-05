import { useState } from "react"
import ModalXL from "../../ModalXL";


const NavMenu = () => {

    const [modalIsOpenAbout, setIsOpenAbout] = useState(false);
    const [modalIsOpenSkills, setIsOpenSkills] = useState(false);


    //Scroll to the Top, para navegar al comienzo de la pantalla
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="container-nav">
            <nav>

                <ul className="social">
                    <li>
                        <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener">
                            <img src="img/github.png" alt="logo github" className="logo-img" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/luciagonzalezlara/" target="_blank" rel="noreferrer noopener">
                            <img src="img/linkedin.png" alt="logo linkedin" className="logo-img" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener">
                            <img src="img/blog.png" alt="logo blog" className="logo-img" />
                        </a>
                    </li>
                </ul>

                <ul className="menu">
                    <li onClick={scrollToTop}>
                        <p>Home</p>
                    </li>
                    <li>
                        {/*Para pintar los textos, se lo paso al componente como una prop siendo un array */}

                        <p onClick={() => setIsOpenAbout(true)} >About</p>
                        <ModalXL
                            modalisopen={modalIsOpenAbout}
                            setisopen={setIsOpenAbout}
                            textsabout={[{
                                text: 'Tras más de 17 años como secretaria, administrativa e incluso empresaria, hace 1 año decidí dar un giro a mi carrera profesional e intentar encontrar mi huequecito en el mundo Tech como Desarrolladora Full Stack (MERN). En el mes de marzo  he finalizado un Bootcamp de Desarrollo Web Full Stack de 500h en The Bridge Digital Talent Accelerator, combinando clases teóricas con proyectos reales e incluso colaborando con otras verticales como UX/UI, Ciberseguridad y Data Science siendo esto el 80% del tiempo y una muy grata experiencia. Gracias al background antes indicado, puedo aportar grandes cualidades como poner pasión en lo que hago, máxima implicación, querer seguir aprendiendo tratando de ser lo más auto suficiente posible, gran capacidad para gestionar la frustración (la mía y las de los demás :)) y saber trabajar en equipo.',
                                img: 'img/yo.jpg',
                                ml: '12px'
                            }]}
                            aboutmenuname={'About'}
                        />
                    </li>
                    <li>
                        <p onClick={() => setIsOpenSkills(true)}>Skills</p>
                        <ModalXL
                            modalisopen={modalIsOpenSkills}
                            setisopen={setIsOpenSkills}
                            textsskills={[{
                                text: 'Mentalidad de aprendizaje y crecimiento, Pasional, Entusiasta e implicada, Colaboradora y tolerante, Adaptación al cambio, Autodidacta, Equipo.',
                                cv: 'img/cv.pdf'
                            }]}
                            skillsmenuname={'Skills'}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu

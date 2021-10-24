import {useState} from "react"
import ModalXL from "../../ModalXL";


const NavMenu = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    //Scroll to the Top

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
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
                        <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener" >

                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/luciagonzalezlara/" target="_blank" rel="noreferrer noopener">
                            <img src="img/linkedin.png" alt="logo linkedin" className="logo-img" />
                        </a>
                        <a href="https://www.linkedin.com/in/luciagonzalezlara/" target="_blank" rel="noreferrer noopener" >

                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener">
                            <img src="img/blog.png" alt="logo blog" className="logo-img" />
                        </a>
                        <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener" >

                        </a>
                    </li>
                </ul>

                <ul className="menu">
                    <li onClick={scrollToTop}>
                        <p> Home</p>
                    </li>

                    <li>
                        <p onClick={() => setIsOpen(true)}>About</p>
                       <ModalXL modalisopen={modalIsOpen} setisopen={setIsOpen} color={'#A6FD17'} text1={'Tras más de 17 años como secretaria, administrativa e incluso empresaria, hace 5 meses decidí dar un giro a mi carrera profesional e intentar encontrar mi huequecito en el mundo Tech como Desarrolladora Full Stack (MERN.'} text2={'En el mes de marzo  he finalizado un Bootcamp de Desarrollo Web de 500h en The Bridge. Digital Talent Accelerator, combinando clases teóricas con proyectos reales e incluso colaborando con otras verticales como UX/UI, Ciberseguridad y Data Science siendo esto el 80% del tiempo y una muy grata experiencia.'} text3={'Gracias al background antes indicado, puedo aportar grandes cualidades como poner pasión en lo que hago, máxima implicación, querer seguir aprendiendo tratando de ser lo más auto suficiente posible (fundamental siendo un junior), gran capacidad para gestionar la frustración (la mía y las de los demás :) ) y saber trabajar en equipo.'}/>
                    </li>

                    <li>
                        <p onClick={() => setIsOpen(true)}>Skills</p>
                       <ModalXL modalisopen={modalIsOpen} setisopen={setIsOpen} color={'$neonblue'} text={'Mentalidad de aprendizaje y crecimiento, Pasional, entusiasta e implicada, Colaboradora y tolerante, Adaptación al cambio, Autodidacta, Equipo'}/>
                    </li>
                </ul>


            </nav>
        </div>
    )
}

export default NavMenu

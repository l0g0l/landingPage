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
                       <ModalXL modalisopen={modalIsOpen} setisopen={setIsOpen}/>
                    </li>

                    <li>
                        <p>Skills</p>
                    </li>
                </ul>


            </nav>
        </div>
    )
}

export default NavMenu

import React from 'react'
import { Link } from 'react-router-dom'

import '../../../sass/layout/_navmenu.scss'

const NavMenu = () => {
    return (
        <div className="container-nav">
            <nav>
                <div>
                    <ul className="social">
                        <li className="github">
                            <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener">
                                <img src="img/github.png" alt="logo github" className="logo-img" />
                            </a>
                            <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener" >
                                <p className="overlay">https://github.com/l0g0l</p>
                            </a>
                        </li>

                        <li className="linkedin">
                            <a href="https://www.linkedin.com/in/luciagonzalezlara/" target="_blank" rel="noreferrer noopener">
                                <img src="img/linkedin.png" alt="logo linkedin" className="logo-img" />
                            </a>
                            <a href="https://www.linkedin.com/in/luciagonzalezlara/" target="_blank" rel="noreferrer noopener" >
                                <p className="overlay">https://www.linkedin.com/in/luciagonzalezlara/</p>
                            </a>
                        </li>

                        <li className="blog">
                            <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener">
                                <img src="img/blog.png" alt="logo blog" className="logo-img" />
                            </a>
                            <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener" >
                                <p className="overlay">https://github.com/l0g0l</p>
                            </a>
                        </li>
                    </ul>
                </div>


                <div>
                    <ul className="menu">
                        <li >
                            <Link to="#"> Home</Link>
                        </li>

                        <li>
                            <Link to="#">About</Link>
                        </li>

                        <li>
                            <Link to="#">Skills</Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <span>&#123; contacto: luciag@gmail.com &#125;</span>
        </div>
    )
}

export default NavMenu

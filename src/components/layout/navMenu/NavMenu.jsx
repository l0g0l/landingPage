import { useState } from "react"
import ModalXL from "../../ModalXL";
import { useTranslation } from 'react-i18next' //traducir a otros idiomas



const NavMenu = () => {

    const [modalIsOpenAbout, setIsOpenAbout] = useState(false);
    const [modalIsOpenSkills, setIsOpenSkills] = useState(false)
    
   //hook para utilizar la libreria i18n para traducir la web
   const {t} = useTranslation()

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
                    <li>
                        {/*Para pintar los textos, se lo paso al componente como una prop siendo un array */}

                        <p onClick={() => setIsOpenAbout(true)} >{t('navmenu.about')}</p>
                        <ModalXL
                            modalisopen={modalIsOpenAbout}
                            setisopen={setIsOpenAbout}
                            textsabout={[{
                                text: t('navmenu.modalxl.txt1'),
                                img: 'img/yo.jpg',
                                ml: '12px'
                            }]}
                            aboutmenuname={'About'}
                        />
                    </li>
                    <li>
                        <p onClick={() => setIsOpenSkills(true)}>{t('navmenu.skills')}</p>
                        <ModalXL
                            modalisopen={modalIsOpenSkills}
                            setisopen={setIsOpenSkills}
                            textsskills={[{
                                text: t('navmenu.modalxl.txt2'),
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

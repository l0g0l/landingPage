import { useState } from "react"
import ModalXL from "../../ModalXL";
import github from '../../../assets/img/github.png'
import linkedin from '../../../assets/img/linkedin.png'
import blog from '../../../assets/img/blog.png'
import yo3 from '../../../assets/img/yo3.jpg'
import cv from '../../../assets/img/cv.pdf'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const NavMenu = () => {

    const [modalIsOpenAbout, setIsOpenAbout] = useState(false);
    const [modalIsOpenSkills, setIsOpenSkills] = useState(false)

    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()
    console.log(t)

    return (
        <div className="container-nav">
            <nav>

                <ul className="social">
                    <li>
                        <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer noopener">
                            <img src={github} alt="logo github" className="logo-img" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/luciagonzalezlara/" target="_blank" rel="noreferrer noopener">
                            <img src={linkedin} alt="logo linkedin" className="logo-img" />
                        </a>
                    </li>
                    <li>
                        <a href="https://desecreadeveloperblog.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                            <img src={blog} alt="logo blog" className="logo-img" />
                        </a>
                    </li>
                </ul>

                <ul className="menu">
                    <li>
                        {/*Para pintar los textos, se lo paso al componente como una prop siendo un array */}
                        {t('navmenu.about') === 'Sobre mi'
                            ?
                            <p onClick={() => setIsOpenAbout(true)} style={{ marginLeft: '80px' }}>{t('navmenu.about')}</p>
                            :
                            <p onClick={() => setIsOpenAbout(true)} >{t('navmenu.about')}</p>
                        }
                        <ModalXL
                            modalisopen={modalIsOpenAbout}
                            setisopen={setIsOpenAbout}
                            textsabout={{
                                text: t('navmenu.modalxl.txt1'),
                                img: yo3
                            }}
                            aboutmenuname={'About'}
                        />
                    </li>
                    <li>
                        {t('navmenu.skills') === 'Habilidades'
                            ?
                            <p onClick={() => setIsOpenSkills(true)} style={{ marginLeft: '80px' }}>{t('navmenu.skills')}</p>
                            :
                            <p onClick={() => setIsOpenSkills(true)}>{t('navmenu.skills')}</p>
                        }
                        <ModalXL
                            modalisopen={modalIsOpenSkills}
                            setisopen={setIsOpenSkills}
                            textsskills={{
                                text: t('navmenu.modalxl.txt2'),
                                cv: cv
                            }}
                            skillsmenuname={'Skills'}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavMenu

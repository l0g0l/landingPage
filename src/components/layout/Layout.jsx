import { useState } from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'
import MainMiniBall from '../MainMiniBall'
import ScrollToTop from '../ScrollToTop'
import Branch1 from '../Branch1'
import Branch2 from '../Branch2'
import Branch3 from '../Branch3'
import email1 from '../../assets/img/email1.png'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const Layout = () => {
    const [showBranch1, setShowBranch1] = useState(false)
    const [showBranch2, setShowBranch2] = useState(false)
    const [showBranch3, setShowBranch3] = useState(false)
    const [modales, setModales] = useState("")

    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()


    //muestra o esconde los componentes branch
    const toggleBranch1 = () => {
        setShowBranch1(!showBranch1)
    }
    const toggleBranch2 = () => {
        setShowBranch2(!showBranch2)
    }
    const toggleBranch3 = () => {
        setShowBranch3(!showBranch3)
    }

    return <>

        <NavMenu />
        <main>
            <header className="container-contact-btnchangel">

                <section className="email-icon">
                    <a href="mailto:luciag.lara@gmail.com" className="email"><img src={email1} alt="icono email" className="email-img" /></a>
                </section>

                <section className="contact">
                    <p>const <strong>{t('home.contact')}</strong> = &#123;</p>
                    <article>
                        {t('home.name') === 'nombre'
                            ?
                            <>
                                <p>{t('home.name')}: &nbsp;"Lucía González",</p>
                                <p>{t('home.email')}:  &nbsp;<a href="mailto:luciag.lara@gmail.com" className="email">"luciag.lara@gmail.com" </a>,</p>
                                <p>{t('home.city')}: &nbsp;"Madrid ({t('home.country')})",</p>
                                <p>blog: <a href="https://desecreadeveloperblog.herokuapp.com/" className="email" target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;"Blog De Secre a Developer"</a></p>
                            </>
                            :
                            <>
                                <p>{t('home.name')}: &nbsp;"Lucía González",</p>
                                <p>{t('home.email')}:  &nbsp;<a href="mailto:luciag.lara@gmail.com" className="email">"luciag.lara@gmail.com" </a>,</p>
                                <p>{t('home.city')}: &nbsp;&nbsp;&nbsp;"Madrid (Spain)",</p>
                                <p>blog: <a href="https://desecreadeveloperblog.herokuapp.com/" className="email" target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;"Blog De Secre a Developer"</a></p>
                            </>
                        }
                    </article>
                    <p>&#125;</p>
                </section>

                <section>
                    <div className="myname">
                        <span className="name">Lucía González</span>
                        <span className="container-web-developer">

                            <p className="web">{t('home.web')}</p>
                            <p className="developer">{t('home.developer')}</p>

                        </span>
                    </div>
                </section>


            </header>
            <section className="text-home" >
                <p>{t('home.click.ball')}</p>
            </section>

            <ScrollToTop />

            <section className="container-main">
                {/*    <div className="text-home"
                    onMouseEnter={e => {
                        setStyle({ display: 'block' });
                    }}
                    onMouseLeave={e => {
                        setStyle({ display: 'none' })
                    }}>
                    <p style={style}>{t('home.click.ball')}</p>
                </div> */}

                <div className="commit-main ">
                    <div className="main-branch">
                        <div className="commitmain-end"></div>
                    </div>
                </div>
                {/*paso por props los estilos que va a necesitar cado uno de los componentes */}
                {showBranch3
                    ?
                    <>
                        <Branch3
                            project={"De Secre a Developer"}
                            modales={modales}
                            setmodales={setModales}
                            css={'branch3propsblog'}
                        />
                        <Branch3
                            project={"Agencia de Viajes"}
                            modales={modales}
                            setmodales={setModales}
                            css={'branch3propsviajes'}
                        />
                        <Branch3
                            project={"Gestor de citas"}
                            modales={modales}
                            setmodales={setModales}
                            css={'branch3propscitas'}
                        />
                    </>
                    :
                    null}

                {showBranch2
                    ?
                    <>
                        <Branch2
                            project={"Buscador de repos"}
                            modales={modales}
                            setmodales={setModales}
                            css={'branch2propsrepos'}
                        />
                        <Branch2
                            project={"NPM Clone"}
                            modales={modales}
                            setmodales={setModales}
                            css={'branch2propsnpm'}

                        />
                        <Branch2
                            project={"Hackathon(Nuwe)"}
                            modales={modales}
                            setmodales={setModales}
                            css={'branch2propshack'}
                        />
                    </>
                    :
                    null}

                {showBranch1
                    ?
                    <>
                        <Branch1
                            project={"coELA"}
                            modales={modales}
                            setmodales={setModales}
                            css={'branch1propscoela'}
                        />
                        <Branch1
                            project={"DontWaste"}
                            modales={modales}
                            setmodales={setModales}
                            css={'branch1propsdw'}
                        />
                    </>
                    :
                    null}

                <MainMiniBall
                    branch3_3={true}
                    css={'miniballpropsbranch3_3'}
                />

                <MainMiniBall
                    branch3={{
                        funcbranch3: toggleBranch3,
                        tooltip4: t('home.commit.txt4'),
                    }}
                    css={'miniballpropsbranch3'}
                />

                <MainMiniBall
                    branch2_2={true}
                    css={'miniballpropsbranch2_2'}
                />

                <MainMiniBall
                    branch2={{
                        funcbranch2: toggleBranch2,
                        tooltip3: t('home.commit.txt3'),
                    }}
                    css={'miniballpropsbranch2'}
                />

                <MainMiniBall
                    branch1_1={true}
                    css={'miniballpropsbranch1_1'}
                />

                <MainMiniBall
                    branch1={{
                        funcbranch: toggleBranch1,
                        tooltip2: t('home.commit.txt2'),
                    }}
                    css={'miniballpropsbranch1'}
                />

                <MainMiniBall
                    quiz={{
                        modales: modales,
                        setmodales: setModales,
                        tooltip1: t('home.commit.txt1'),
                        project: 'quiz',
                    }}
                    css={'miniballpropsquiz'}
                />
            </section>
        </main>
        <Footer />
    </>
}
export default Layout;
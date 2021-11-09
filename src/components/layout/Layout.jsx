import { useState } from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'
import MainMiniBall from '../MainMiniBall'
import ScrollToTop from '../ScrollToTop'
import Branch1 from '../Branch1'
import Branch2 from '../Branch2'
import Branch3 from '../Branch3'
import idioma1 from '../../assets/img/idioma1.png'
import flechaab2 from '../../assets/img/flechaab2.png'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas



const Layout = () => {
    const [showBranch1, setShowBranch1] = useState(false)
    const [showBranch2, setShowBranch2] = useState(false)
    const [showBranch3, setShowBranch3] = useState(false)
    const [modalOpenBlog, setModalOpenBlog] = useState(false)

    //hook para utilizar la libreria i18n para traducir la web
    const [language, setLanguage] = useState('en')
    const { t, i18n } = useTranslation()


    const onChangeLanguage = () => {
        //creo una variable fuera del if  para almacenar cual es el lenguaje al que quiero traducir, ya que no puedo utilizar el state que acabo de actualizar
        let tmplenguaje
        if (language === 'en') { //si está en inglés
            tmplenguaje = 'es'
            setLanguage('es') //cambia a español
        } else {
            tmplenguaje = 'en'
            setLanguage('en') //sino déjalo en inglés
        }
        i18n.changeLanguage(tmplenguaje)
    }


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

    //abre el modal del primer proyecto
    const toggleModal = () => {
        setModalOpenBlog(!modalOpenBlog)
    }

    return <>

        <NavMenu />
        {/*botón para cambiar el lenguaje, tooltip que según hayas seleccionado el idioma, te mostrará el otro */}
        <main>
            <header className="container-contact-btnchangel">
                <section className="contact">
                    <p >class <strong>Contact</strong> &#123;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;constructor ( public <strong>name:</strong>string,&nbsp;&nbsp;public <strong>email:</strong>string ) &#123;<br /> &nbsp;&nbsp;&nbsp;&nbsp;&#125; <br />&#125;;</p>
                    <p>let Lucia_Contact;</p>
                    <p>Lucia_Contact = new Contact (<strong> 'Lucía González'</strong>,&nbsp; <strong>'luciag.lara@gmail.com' </strong>);</p>
                </section>

                <section className="container-tooltip-language ">
                    <button className="changelanguage" onClick={() => onChangeLanguage()}>
                        <img className="img-changelanguage" src={idioma1} alt="icono cambio de idioma" />
                        {language === 'en'
                            ?

                            <div  >
                                <span className="textlanguage" >Español</span>
                            </div>
                            :
                            <div >
                                <span className="textlanguage" >English</span>
                            </div>
                        }
                    </button>
                </section>

            </header>

            <section>
                <div className="myname">
                    <span >Lucía González</span>
                    <span className="container-web-developer">
                        <p className="web">Web </p>
                        <p className="developer">Developer</p>
                    </span>
                </div>
            </section>

            <ScrollToTop />
            <div className="container-downarrow">
                <img src={flechaab2} className="downarrow" alt="down arrow" />
            </div>
            <div className="container-main">
                <div className="commit-main ">
                    <div className="tooltipcommitmain">
                        <div className="text">
                            <p>{t('home.click.ball')}</p>
                        </div>
                    </div>
                    <div className="main-branch">

                        <div className="commitmain-end"></div>
                    </div>
                </div>
                {/*paso por props los estilos que va a necesitar cado uno de los componentes */}
                {showBranch3
                    ?
                    <>
                        <Branch3
                            display={"block"}
                            position={"absolute"}
                            top={"23px"}
                            left={"32px"}
                            project={"De Secre a Developer"}
                            background={'rgb(210, 240, 252)'}
                            boxcolor={'0 0 6px  rgb(53, 108, 129), 0 0 6px  rgb(106, 209, 250), 0 0 6px  rgb(106, 209, 250), 0 0 6px  rgb(106, 209, 250),0 0 12px  rgb(106, 209, 250)'} />
                        <Branch3
                            display={"block"}
                            position={"absolute"}
                            top={"73px"}
                            left={"32px"}
                            project={"Agencia de Viajes"}
                            background={'rgb(210, 240, 252)'}
                            boxcolor={'0 0 6px  rgb(53, 108, 129), 0 0 6px  rgb(106, 209, 250), 0 0 6px  rgb(106, 209, 250), 0 0 6px  rgb(106, 209, 250),0 0 12px  rgb(106, 209, 250)'} />
                        <Branch3
                            display={"block"}
                            position={"absolute"}
                            top={"123px"}
                            left={"32px"}
                            project={"Gestor de citas"}
                            background={'rgb(210, 240, 252)'}
                            boxcolor={'0 0 6px  rgb(53, 108, 129), 0 0 6px  rgb(106, 209, 250), 0 0 6px  rgb(106, 209, 250), 0 0 6px  rgb(106, 209, 250),0 0 12px  rgb(106, 209, 250)'} />
                    </>
                    :
                    null}
                {showBranch2
                    ?
                    <>
                        <Branch2
                            display={"block"}
                            position={"absolute"}
                            top={"27px"}
                            left={"-22px"}
                            project={"Buscador de repos"}
                            background={'rgb(231, 252, 197)'}
                            boxcolor={'0 0 6px rgb(70, 110, 6), 0 0 6px rgb(190, 250, 93), 0 0 6px rgb(190, 250, 93), 0 0 6px rgb(190, 250, 93),0 0 12px rgb(190, 250, 93)'} />
                        <Branch2
                            display={"block"}
                            position={"absolute"}
                            top={"77px"}
                            left={"-22px"}
                            project={"NPM Clone"}
                            background={'rgb(231, 252, 197)'}
                            boxcolor={'0 0 6px rgb(70, 110, 6), 0 0 6px rgb(190, 250, 93), 0 0 6px rgb(190, 250, 93), 0 0 6px rgb(190, 250, 93),0 0 12px rgb(190, 250, 93)'} />
                        <Branch2
                            display={"block"}
                            position={"absolute"}
                            top={"127px"}
                            left={"-22px"}
                            project={"Hackathon(Nuwe)"}
                            background={'rgb(231, 252, 197)'}
                            boxcolor={'0 0 6px rgb(70, 110, 6), 0 0 6px rgb(190, 250, 93), 0 0 6px rgb(190, 250, 93), 0 0 6px rgb(190, 250, 93),0 0 12px rgb(190, 250, 93)'} />
                        {/* <Branch2 display={"block"} position={"absolute"} top={"27px"} left={"-20px"} project={"Maquetación Avanzada"} /> */}
                    </>
                    :
                    null}

                {showBranch1
                    ?
                    <>
                        <Branch1
                            display={"block"}
                            position={"absolute"}
                            top={"73px"}
                            left={"32px"}
                            project={"coELA"}
                            background={'rgb(190, 187, 223)'}
                            boxcolor={'0 0 6px rgb(78, 73, 126), 0 0 6px rgb(111, 105, 172), 0 0 6px rgb(111, 105, 172), 0 0 6px rgb(111, 105, 172),0 0 12px rgb(194, 189, 233)'}
                        />
                        <Branch1
                            display={"block"}
                            position={"absolute"}
                            top={"23px"}
                            left={"32px"}
                            project={"DontWaste"}
                            background={'rgb(203, 201, 231)'}
                            boxcolor={'0 0 6px rgb(78, 73, 126), 0 0 6px rgb(111, 105, 172), 0 0 6px rgb(111, 105, 172), 0 0 6px rgb(111, 105, 172),0 0 12px rgb(170, 166, 209)'}
                        />
                    </>
                    :
                    null}

                <MainMiniBall
                    branch3_3={{
                        top4_4: "1017px"
                    }}
                />

                <MainMiniBall
                    branch3={{
                        funcbranch3: toggleBranch3,
                        top4: "835px",
                        tooltip4: t('home.commit.txt4'),
                        with4: '135px',
                        size4: '42px',
                        topminiball4: '-2px'
                    }}
                />

                <MainMiniBall
                    branch2_2={{
                        top3_3: "735px"
                    }}
                />

                <MainMiniBall
                    branch2={{
                        funcbranch2: toggleBranch2,
                        top3: "548px",
                        tooltip3: t('home.commit.txt3'),
                        with3: '170px',
                        size3: '20px',
                        topminiball3: '-2px'
                    }}
                />

                <MainMiniBall
                    branch1_1={{
                        top1_1: "444px"
                    }}
                />

                <MainMiniBall
                    branch1={{
                        top2: "313px",
                        funcbranch: toggleBranch1,
                        tooltip2: t('home.commit.txt2'),
                        with2: '270px',
                        size1: '42px',
                        topminiball2: '0px'
                    }}
                />

                <MainMiniBall
                    quiz={{
                        funcmodal: toggleModal,
                        top1: "210px",
                        modalstate: modalOpenBlog,
                        tooltip1: t('home.commit.txt1'),
                        size1: '42px',
                        topminiball1: '-2px',
                        with1: '215px'
                    }}
                />
            </div>
        </main>
        <Footer />
    </>
}

export default Layout;
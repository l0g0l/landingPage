import { useState } from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'
import Image from '../Image'
import MainMiniBall from '../MainMiniBall'
import Branch1 from '../Branch1'
import Branch2 from '../Branch2'
import Branch3 from '../Branch3'


const Layout = () => {
    const [showBranch1, setShowBranch1] = useState(false)
    const [showBranch2, setShowBranch2] = useState(false)
    const [showBranch3, setShowBranch3] = useState(false)
    const [modalOpenBlog, setModalOpenBlog] = useState(false)

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

    return (
        <div className="container-layout">
            <NavMenu />
            <main>
                <div className="contact" id="contact">
                    <p >class <strong>Contact</strong>&#123;</p>
                    <p>constructor(public <strong>name:</strong>string, public <strong>email:</strong>string)&#123;&#125;&nbsp;&#125;;</p>
                    <p>let Lucia_Contact;</p>
                    <p>Lucia_Contact = new Contact(<strong>'Lucía González'</strong>, <strong>'luciag.lara@gmail.com'</strong>);</p>
                </div>

                <div className="myname">
                    <span >Lucia Gonzalez</span>
                    <span >Web Developer</span>
                </div>
                <div className="container-main">
                    <div className="commit-main ">
                        <div className="main-branch">

                            <div className="commit-main end">
                                <Image />
                            </div>
                        </div>
                    </div>
                    {/*paso por props los estilos que va a necesitar cado uno de los componentes */}
                    {showBranch3
                        ?
                        <>
                            <Branch3 display={"block"} position={"absolute"} top={"12px"} left={"20px"} project={"De secre a Developer"} />
                            <Branch3 display={"block"} position={"absolute"} top={"62px"} left={"20px"} project={"Agencia de Viajes"} />
                            <Branch3 display={"block"} position={"absolute"} top={"112px"} left={"20px"} project={"Gestor de citas"} />
                        </>
                        :
                        null}
                    {showBranch2
                        ?
                        <>
                            <Branch2 display={"block"} position={"absolute"} top={"77px"} left={"-16px"} project={"Buscador de repos"} />
                            <Branch2 display={"block"} position={"absolute"} top={"127px"} left={"-16px"} project={"NPM Clone"} />
                            <Branch2 display={"block"} position={"absolute"} top={"177px"} left={"-16px"} project={"Hackathon(Nuwe)"} />
                            <Branch2 display={"block"} position={"absolute"} top={"27px"} left={"-16px"} project={"Maquetación Avanzada"} />
                        </>
                        :
                        null}

                    {showBranch1
                        ?
                        <>
                            <Branch1 display={"block"} position={"absolute"} top={"80px"} left={"22px"} project={"coELA"} />
                            <Branch1 display={"block"} position={"absolute"} top={"20px"} left={"22px"} project={"DontWaste"} />
                        </>
                        :
                        null}
                    <MainMiniBall
                        branch3_3={{
                            top4_4: "62px"
                        }}
                    />

                    <MainMiniBall
                        branch3={{
                            funcbranch3: toggleBranch3,
                            top4: "222px",
                            tooltip4: 'Full Stack',
                            with4: '135px',
                            size4: '42px',
                            topminiball4: '-2px'
                        }}
                    />

                    <MainMiniBall
                        branch2_2={{
                            top3_3: "322px"
                        }}
                    />

                    <MainMiniBall
                        branch2={{
                            funcbranch2: toggleBranch2,
                            top3: "563px",
                            tooltip3: 'Maquetaciones',
                            with3: '170px',
                            size3: '42px',
                            topminiball3: '-3px'
                        }}
                    />

                    <MainMiniBall
                        branch1={{
                            top2: "800px",
                            funcbranch: toggleBranch1,
                            tooltip2: 'Proyectos fin de Bootcamp',
                            with2: '270px',
                            topminiball2: '0px'
                        }}
                    />

                    <MainMiniBall
                        branch1_1={{
                            top1_1: "663px"
                        }}
                    />

                    <MainMiniBall
                        quiz={{
                            funcmodal: toggleModal,
                            top1: "900px",
                            modalstate: modalOpenBlog,
                            tooltip1: 'Mi primer proyecto',
                            size1: '42px',
                            topminiball1: '-2px',
                            with1: '215px'
                        }}
                    />





                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Layout;
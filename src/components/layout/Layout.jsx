import { useState } from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'
import Image from '../Image'
import MainMiniBall from '../MainMiniBall'
import BranchBall from '../BranchBall'


const Layout = () => {
    const [showBranch, setShowBranch] = useState(false)
    const [modalOpenBlog, setModalOpenBlog] = useState(false)
    console.log(modalOpenBlog)

   

    //muestra o esconde el componente branch
    const toggleBranch = () => {
        setShowBranch(!showBranch)
    }

    //abre el modal
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
                    {showBranch
                        ?
                        <>
                            <BranchBall display={"block"} position={"absolute"} top={"20px"} left={"27px"} project={"DontWaste"} />
                            <BranchBall display={"block"} position={"absolute"} top={"80px"} left={"27px"} project={"coELA"} />
                        </>
                        :
                        null}

                    <MainMiniBall top={"200px"} />
                    <MainMiniBall top={"600px"} />
                    <MainMiniBall top={"500px"} />
                    <MainMiniBall top={"750px"} func={toggleBranch} />
                    <MainMiniBall top={"850px"} funcmodal={toggleModal} modalstate={modalOpenBlog}/>





                </div>

            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;
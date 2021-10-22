import { useState } from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'
import Image from '../Image'
import MiniBall from '../MiniBall'
import Branch from '../Branch'


const Layout = ({ children }) => {
    const [showBranch, setShowBranch] = useState(false)

    const toggleBranch = () => {
        setShowBranch(!showBranch)
    }


    return (
        <div className="container-layout">
            <NavMenu />
            <main>
                <div className="contact">
                    <p>class <b>Contact</b>&#123;</p>
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
                    {showBranch ?
                        <>
                            <Branch display={"block"} position={"absolute"} top={"20px"} left={"59px"} />
                            <Branch display={"block"} position={"absolute"} top={"80px"} left={"59px"} />
                        </>
                        : null}




                    <MiniBall top={"200px"} />
                    <MiniBall top={"300px"} />
                    <MiniBall top={"550px"} func={toggleBranch} />
                    <MiniBall top={"650px"} />





                </div>





            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;
import React from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'


const Layout = ({ children }) => {
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
            o
                </div> 
                




            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;
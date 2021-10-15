import React from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'


const Layout =({children}) =>{
    return(
        <>
       <NavMenu/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;
import React from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'
import Header from '../header/Header'

import '../../sass/layout/_layout.scss'


const Layout = ({ children }) => {
    return (
        <div className="container-layout">
            <Header />
            <NavMenu />
            <main>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur mattis libero, quis vehicula purus facilisis in. Donec finibus mauris ornare porttitor lacinia.

            </main>
            <Footer />
        </div>
    )
}

export default Layout;
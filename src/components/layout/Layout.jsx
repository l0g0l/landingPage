import React from 'react'
import NavMenu from './navMenu/NavMenu'
import Footer from './footer/Footer'
import Header from '../header/Header'

// import '../../sass/layout/_layout.scss'


const Layout = ({ children }) => {
    return (
        <div className="container-layout">
            <Header />
            <NavMenu />
            <main>
                <div className="contact">
                    <p>class <b>Contact</b>&#123;</p>
                    <p>constructor(public <strong>name:</strong>string public <strong>email:</strong>string)</p>
                    <p>let Lucia_Contact;</p>
                    <p>Lucia_Contact = new Contact(<strong>'Lucía González'</strong>, <strong>'luciag.lara@gmail.com'</strong>);</p>
                </div>
               {/*  <div className="introduceMe">
                    <img className="introduceMe-img" src="/img/aboutMHuert.jpg" alt="yo en mi huerto" />
                </div> */}

                <div className="myName">

                    <span>Lucia Gonzalez</span>

                    <span>Web Developer</span>

                </div>
                {/* <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis laudantium deleniti labore eligendi quo recusandae, harum odit, magni dicta vitae nesciunt aut ullam? Nostrum laboriosam exercitationem quaerat quae sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos hic earum non ducimus aliquam distinctio deserunt fuga reprehenderit, et dolor magni beatae voluptate, delectus soluta cum natus repellat sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem quia adipisci molestias quas suscipit nihil aut temporibus architecto consectetur quaerat nesciunt vel, in odio saepe quam, neque harum nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste eaque, deleniti esse natus exercitationem illum eligendi, ratione assumenda consequuntur a doloremque omnis adipisci. Mollitia, numquam ipsa? Facilis, eveniet nulla.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo fugit impedit temporibus quisquam incidunt repellat natus dicta, recusandae quod harum obcaecati odio mollitia exercitationem quia sit vero nostrum amet. Incidunt!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium rem hic saepe eius culpa facilis exercitationem, et eaque dignissimos fugit, laboriosam incidunt odit velit pariatur ipsam fuga vero atque.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur exercitationem quae dolorem cumque error voluptate numquam veniam nisi incidunt, cum vitae nostrum, consectetur, aspernatur ea obcaecati culpa! Aut, quis voluptate!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam soluta delectus nihil voluptatibus, est numquam possimus itaque exercitationem quisquam quidem vero repudiandae autem maiores sapiente libero veniam minus nulla asperiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum ex praesentium provident numquam dolorum nesciunt, quis perferendis! Quibusdam dolore nihil labore sed non consequuntur ipsam optio vitae incidunt ipsum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perferendis ipsam consectetur nam et ullam id veritatis quibusdam, sit nostrum pariatur doloribus voluptatibus, consequatur autem doloremque in quia earum dolores!
                </div> */}
                




            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;
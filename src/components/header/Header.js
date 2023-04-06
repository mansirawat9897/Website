// import React from 'react';
// import "./header.css"
// import AppLogo from '../../assets/imgs/logo/AppLogo.png'

// function Header(props) {

//     return (
//         <>
//             <div className='header'>
//                 <div className='container'>
//                     <div className="nav">
//                         <input type="checkbox" id="nav-check" />
//                         <div className="nav-header">
//                             <div className="nav-brand ">
//                                 <span className='brand-name'><img src={AppLogo}></img></span>
//                             </div>
//                         </div>
//                         <div className="nav-btn">
//                             <label htmlFor="nav-check">
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </label>
//                         </div>
//                         <div className="nav-links">
//                             <div className=' nav-link-items'>
//                                 <a href='#home' className="nav-link" >Home</a>
//                                 <a href='#about' className="nav-link" >About</a>
//                                 <a href='#services' className="nav-link" >Services</a>
//                                 <a href='#blog' className="nav-link" >Blogs</a>
//                                 <a href='#contact' className="nav-link" >Contact</a>
//                             </div>
//                             <div className='top-btn'>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )


// }

// export default Header
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from '../../components/Login.js'
import SignUp from '../../components/Signup.js'
import MainPage from "../../pages/index"
import MasterSection from '../masterSection/MasterSection.js'
import WorkWith from '../workWith/WorkWith.js'
import Services from '../services/Services.js'
import Blogs from '../blogs/Blogs.js'
import WhyChooseUs from '../whyChooseUs/WhyChooseUs.js'
import About from '../about/About.js'
function Header() {
    return (
        <Router>
            <div className="MenuApp">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        {/* <Link className="navbar-brand" to={'/sign-in'}>
                        </Link> */}
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/home'}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/about'}>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/services'}>
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/blogs'}>
                                        Blogs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/contact'}>
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/sign-in'}>
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/sign-up'}>
                                        Sign up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<WhyChooseUs />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>

            </div>
        </Router>
    )
}
export default Header
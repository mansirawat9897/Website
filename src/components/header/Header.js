import React from 'react';
import "./header.css"
import AppLogo from '../../assets/imgs/logo/AppLogo.png'

function Header(props) {

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className="nav">
                        <input type="checkbox" id="nav-check" />
                        <div className="nav-header">
                            <div className="nav-brand ">
                                <span className='brand-name'><img src={AppLogo}></img></span>
                            </div>
                        </div>
                        <div className="nav-btn">
                            <label htmlFor="nav-check">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        <div className="nav-links">
                            <div className=' nav-link-items'>
                                <a href='#home' className="nav-link" >Home</a>
                                <a href='#about' className="nav-link" >About</a>
                                <a href='#services' className="nav-link" >Services</a>
                                <a href='#blog' className="nav-link" >Blogs</a>
                                <a href='#contact' className="nav-link" >Contact</a>
                            </div>
                            <div className='top-btn'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )


}

export default Header
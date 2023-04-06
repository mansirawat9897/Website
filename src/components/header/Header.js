import React from 'react';
import "./header.css"
import AppLogo from '../../assets/imgs/logo/AppLogo.png'
import { Link } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';


function Header(props) {

    return (
        <>
            <div className='header'>
                <div className='container-fluid'>
                    <div className="nav">
                        <input type="checkbox" id="nav-check" />
                        <div className="nav-header">
                            <div className="nav-brand ">
                                <span className='brand-name d-flex'><img src={AppLogo}></img><h3 className="ms-2">Blue Ocean Internet</h3></span>
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
                                <Link to='/' className="nav-link" >Home</Link>
                                <Link to='/about' className="nav-link" >About</Link>
                                <Link to='/services' className="nav-link" >Services</Link>
                                <Link to='/blogs' className="nav-link" >Blogs</Link>
                                {

                                    // <Link to='/contact' className="nav-link" >Contact</Link>
                                }
                                <button className="btn btn-outline-secondary me-4" data-bs-toggle="modal" data-bs-target="#Login">SignIn</button>
                                <button className="btn btn-outline-secondary me-5" data-bs-toggle="modal" data-bs-target="#Signup">SignUn</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Login />
            <Signup />
        </>
    )


}

export default Header

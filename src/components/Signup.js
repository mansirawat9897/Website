import React, { Component } from 'react'
import './login.css'
function Signup() {
    return (
        <>
            <div className="modal fade" id="Signup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Sign Up</h5>
                            <div className="mb-4">
                                <label for="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstname" placeholder="John" autocomplete="off" />
                            </div>
                            <div className="mb-4">
                                <label for="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastname" placeholder="Doe" autocomplete="off" />
                            </div>
                            <div className="mb-4">
                                <label for="contact" className="form-label">Contact Number</label>
                                <input type="number" className="form-control" id="contact" placeholder="10 digit number" autocomplete="off" />
                            </div>
                            <div className="mb-4">
                                <label for="Email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="Email" placeholder="name@example.com" autocomplete="off" />
                            </div>
                            <div className="mb-4">
                                <label for="Password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="Password" placeholder="password" autocomplete="off" />
                            </div>
                            <div className="mb-3 ">
                                <button className="btn btn-dark w-100" >Sign Up</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )


}
export default Signup

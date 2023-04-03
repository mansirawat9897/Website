import React from 'react'
import about from '../../assets/imgs/about/3/1.jpg'
export default function About() {
    return (
        <section className="about__area-3">
            <div className="container pt-140 pb-110" id="about">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="about__img-3" data-aos="fade-right" data-aos-duration="3000">
                            <img src={about} alt="About Thumbnail" />
                        </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-sub-title title-anim" data-aos="fade-up" data-aos-duration="1000">Why Choose Us</h2>
                            <h3 className="sec-title title-anim" data-aos="fade-up" data-aos-duration="2500">We are leading digital marketing agency.</h3>
                        </div>
                        <div className="sec-text-wrapper">
                            <div className="sec-text text-anim" data-aos="zoom-in-up" data-aos-duration="3000">
                                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                                        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                                        <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
                                    </ol>

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="d-block w-100">
                                                <h1>Driven by ROI</h1>
                                                <h6>We ensure you get the bet work for reasonable price. For every penny you put at stake, we ensure you more than that you will take.</h6>
                                                <p>We jump through hoops not for us but for YOU. We increase your investments and reduce your stress. More money we pump, the more we press.</p>
                                                {/* <div className="btn_wrapper">
                                                <a className="wc-btn-light btn-hover btn-item" href="about.html"><span></span> Explore Us <i
                                                    className="fa-solid fa-arrow-right"></i></a>
                                            </div>                                        */}
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="d-block w-100">
                                                <h1>Go the Extra Mile </h1>
                                                <h6>We always take those extra steps to let you setup your business smoothly and run it hassle-free. </h6>
                                                <p>Unlike others, we do not leave you mid journey. We go the extra mile with a smile. Helping you out with tasks not necessarily part of our work, but essential for you. </p>
                                                {/* <div className="btn_wrapper">
                                                <a className="wc-btn-light btn-hover btn-item" href="about.html"><span></span> Explore Us <i
                                                    className="fa-solid fa-arrow-right"></i></a>
                                            </div>                                         */}
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="d-block w-100">
                                                <h1>We Deliver Commitment With Our Service </h1>
                                                <h6>You have our word and experienced members, working to deliver our promise on time with no scope of errors and complaints.</h6>
                                                <p>Worried about the services, tensed about the procedure? Do not be. We commit ourselves completely to the cause. Expect complete transparency with unfaltering dedication.</p>
                                                {/* <div className="btn_wrapper">
                                                <a className="wc-btn-light btn-hover btn-item" href="about.html"><span></span> Explore Us <i
                                                    className="fa-solid fa-arrow-right"></i></a>
                                            </div>                                        */}
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="d-block w-100">
                                                <h1>No Such Thing As “AFTER HOURS” For Us  </h1>
                                                <h6>We provide our services 24*7. No interruptions to disconnect us from your problems.</h6>
                                                <p>YOU come before us. Your problem is given immediate attention and its resolution our priority. So never hesitate to contact us, however small the problem, whatever be the time.</p>

                                            </div>
                                        </div>
                                    </div>

                                    <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                                <div className="btn_wrapper">
                                    <a className="wc-btn-light btn-hover btn-item" href="about.html"><span></span> Explore Us <i
                                        className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

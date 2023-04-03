import React from 'react'
import solutionImg1 from "../../assets/imgs/thumb/solution.png"
import solutionImg2 from "../../assets/imgs/thumb/solution-2.png"
import solutionImg3 from "../../assets/imgs/thumb/solution-3.png"
import icon1 from "../../assets/imgs/icon/1.png"
import icon2 from "../../assets/imgs/icon/2.png"
import icon3 from "../../assets/imgs/icon/3.png"
import icon4 from "../../assets/imgs/icon/4.png"
import icon5 from "../../assets/imgs/icon/5.png"


function MasterSection() {
    return (
        <section className="solution__area">
            <div className="container hero-line" id="home"></div>
            <div className="solution__wrapper">
                <div className="solution__left">
                    <div className="solution__img-1 " data-aos="fade-right" data-aos-duration="2000">
                        <img src={solutionImg1} alt="Solution Image" />
                    </div>
                    <div className="solution__img-2" data-aos="fade-up-right" data-aos-duration="2000">
                        <img src={solutionImg2} alt="Solution Image" />
                    </div>
                </div>

                <div className="solution__mid">
                    <h3 className="solution__title animation__char_come" data-aos="zoom-in" data-aos-duration="2000">Blue Ocean Internet</h3>
                    <h2 data-aos="fade-up" data-aos-duration="3000">
                        Reach A Bigger Audience</h2>
                    <p data-aos="fade-up" data-aos-duration="3000">Let Blue Ocean helps you to increase your reach and engagement across the oceans.</p>

                </div>

                <div className="solution__right">
                    <div className="solution__img-3" data-aos="fade-left" data-aos-duration="2000">
                        <img src={solutionImg3} alt="Solution Image" />
                    </div>
                </div>
            </div>

            <div className="container pb-130">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="solution__btm">
                            <ul>
                                <li>Approch</li>
                                <li>Creativity</li>
                                <li>Experienced</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="solution__shape">
                <img src={icon1} alt="Shape Image" className="shape-1 bubble" />
                <img src={icon2} alt="Shape Image" className="shape-2 bubble" />
                <img src={icon3} alt="Shape Image" className="shape-3 bubble" />
                <img src={icon4} alt="Shape Image" className="shape-4" />
                <img src={icon5} alt="Shape Image" className="shape-5" />
            </div>
        </section>
    )
}

export default MasterSection
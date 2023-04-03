import React from 'react'
import arrowDown from "../../assets/imgs/icon/arrow-down-sm.png"
import heroImg from "../../assets/imgs/hero/3/1.jpg"

export default function HeroSection() {
    return (
        <>

            <section className="hero__area-3">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="hero__inner-3" >
                                <div data-aos="fade-right">
                                    <div className="sec-title-wrapper" >
                                        <h2 className="sec-sub-title">Digital</h2>
                                        <h3 className="sec-title title-left">Mark</h3>
                                        <h3 className="sec-title title-right">eting</h3>
                                    </div>
                                </div>
                                <div className="hero__text-3" data-aos="fade-up" data-aos-duration="3000">
                                    <p className="hero__text-animation" >Static and dynamic secure code review can prevent a day before your
                                        product is even released. We can integrate with your dev environment</p>
                                </div>
                                <div className="scroll-down">
                                    <button><img src={arrowDown} alt="arrow icon" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="hero3-img-ani" data-aos="zoom-in" >
                        <img src={heroImg} alt="Hero Image" className="hero3-img" />
                </div>
            </section>
        </>

    )
}

import React from 'react'
import img1 from '../../assets/imgs/thumb/dev-1.jpg'
import img2 from '../../assets/imgs/thumb/dev-2.jpg'

function Services() {
    return (
    <>
        <section className="development__area">
            <div className="container g-0 line pb-150" id="services">
                <div className="line-3"></div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper pt-130 text-anim">
                            <h2 className="sec-sub-title title-anim" data-aos="fade-up" data-aos-duration="2000">Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-title animation__char_come" data-aos="fade-up" data-aos-duration="3000">Web and mobile development</h2>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                        <div className="development__wrapper">
                            <div className="development__content" data-aos="fade-right" data-aos-duration="3000">
                                <p>Every decision we make needs to answer the million-dollar question: how will this benefit our
                                    partner’s goal best? We work to develop solutions</p>
                                <p>We like to be different, in the same way that every mission is different. Every project is an
                                    opportunity to create result that will help you</p>
                            </div>
                            <ul data-aos="fade-left" data-aos-duration="3000">
                                <li>+ API Development</li>
                                <li>+ WordPress</li>
                                <li>+ Cloud Migration</li>
                                <li>+ Front End Development</li>
                                <li>+ JavaScript</li>
                                <li>+ Fluter Framework</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                        <div className="development__img" data-aos="zoom-in">
                            <img src={img1} alt="Development Image"  />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div className="development__img" data-aos="flip-down">
                            <img src={img2} alt="Development Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="workflow__area-6">
        <div className="container g-0 line pb-130">
          <div className="line-3"></div>
          <div className="workflow__wrapper-6">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6" data-aos="fade-right" data-aos-duration="500">
                  <h6 className="workflow__title-6">Planning and <br/>sketching</h6>
                  <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6" data-aos="fade-right" data-aos-duration="1500">
                  <h6 className="workflow__title-6">Team <br/>working</h6>
                  <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6" data-aos="fade-right" data-aos-duration="2500">
                  <h6 className="workflow__title-6">Flowchart and <br/>wireframe</h6>
                  <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6" data-aos="fade-right" data-aos-duration="3000">
                  <h6 className="workflow__title-6">User experience <br/>Testing</h6>
                  <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default Services
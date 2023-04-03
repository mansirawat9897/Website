import React from 'react'
import blogImg1 from '../../assets/imgs/blog/3/1.jpg'
import blogImg2 from '../../assets/imgs/blog/3/2.jpg'

function Blogs() {
  return (
    <section className="blog__area-3 pb-140 blog__animation">
          <div className="container" id="blog">
            <div className="row ">
              <div className="col-xxl-12">
                <div className="sec-title-wrapper text-anim pt-130">
                  <h2 className="sec-sub-title" data-aos="fade-up" data-aos-duration="1000">Recent Blog</h2>
                  <h3 className="sec-title title-anim" data-aos="fade-up" data-aos-duration="2500">Read Updated <br/>Journal</h3>
                  <p data-aos="zoom-in-up" data-aos-duration="3000">Read our blog and try to see everything from every perspective. Our passion lies in making
                    everything
                    accessible and aesthetic for everyone. </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <article className="blog__item-3" data-aos="fade-right">
                  <div className="blog__img-wrapper-3">
                    <a href="blog-details.html">
                      <div className="img-box">
                        <img className="image-box__item" src={blogImg1} alt="Blog Thumbnail"/>
                        <img className="image-box__item" src={blogImg1} alt="BLog Thumbnail"/>
                      </div>
                    </a>
                  </div>
                  <div className="blog__info-3">
                    <h4 className="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" className="blog__title-3">How to bring fold to your startup
                        company with
                        Axtra</a></h5>
                    <a href="blog-details.html" className="blog__btn">Read More <span><i
                          className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </article>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <article className="blog__item-3" data-aos="fade-left">
                  <div className="blog__img-wrapper-3">
                    <a href="blog-details.html">
                      <div className="img-box">
                        <img className="image-box__item" src={blogImg2} alt="Blog Thumbnail"/>
                        <img className="image-box__item" src={blogImg2} alt="BLog Thumbnail"/>
                      </div>
                    </a>
                  </div>
                  <div className="blog__info-3">
                    <h4 className="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" className="blog__title-3">How to manage a talented and
                        successful design
                        team</a></h5>
                    <a href="blog-details.html" className="blog__btn">Read More <span><i
                          className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Blogs
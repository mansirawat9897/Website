import React from 'react'
import brand1 from '../../assets/imgs/brand/1.png'
import brand2 from '../../assets/imgs/brand/2.png'
import brand3 from '../../assets/imgs/brand/3.png'
import brand4 from '../../assets/imgs/brand/4.png'
import brand5 from '../../assets/imgs/brand/5.png'
import brand6 from '../../assets/imgs/brand/6.png'
import searchicon from '../../assets/imgs/icon/yellow_search_icon.png'

export default function WorkWith() {
  return (
    <section className="brand__area">
      <div className="container  pb-140" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <div className="row">
          <div className="col-xxl-6">
            <h1 className="brand__title-3 title-anim">Our Services
            </h1>
            <div className="brand__list-3">
              <div className="brand__item-2 fade_bottom" data-aos="fade-up" data-aos-duration="500">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={searchicon} height="50px" width="50px" alt="Brand Logo" />
                  </div>
                  <div>
                    <h4>Search Engine Optimization</h4>
                    <h6>Let your customers know of your existence to offer them the solution they need. </h6>
                  </div>
                </div>
              </div>
              <div className="brand__item-2 fade_bottom" data-aos="fade-up" data-aos-duration="1000">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={searchicon} height="50px" width="50px" alt="Brand Logo" />
                  </div>
                  <div>
                    <h4>Web Development</h4>
                    <h6>Get a website that attracts, retains and engages the customer in simple, user-friendly yet creative manner. </h6>
                  </div>
                </div>
              </div>
              <div className="brand__item-2 fade_bottom" data-aos="fade-up" data-aos-duration="1500">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={searchicon} height="50px" width="50px" alt="Brand Logo" />
                  </div>
                  <div>
                    <h4>Paid social media advertising </h4>
                    <h6>Engage with authentic customers and build your presence on social media platforms using the best strategies. </h6>
                  </div>
                </div>              </div>
              <div className="brand__item-2 fade_bottom" data-aos="fade-up" data-aos-duration="2000">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={searchicon} height="50px" width="50px" alt="Brand Logo" />
                  </div>
                  <div>
                    <h4>Content Writing</h4>
                    <h6>Deliver your message to customer in unique form, entertaining, educating and retaining them. </h6>
                  </div>
                </div>              </div>
              <div className="brand__item-2 fade_bottom" data-aos="fade-up" data-aos-duration="2500">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={searchicon} height="50px" width="50px" alt="Brand Logo" />
                  </div>
                  <div>
                    <h4>Social Media</h4>
                    <h6>A social media presence targeting customers at their subconscious level, solidifying your brand name. </h6>
                  </div>
                </div>              </div>
              <div className="brand__item-2 fade_bottom" data-aos="fade-up" data-aos-duration="3000">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={searchicon} height="50px" width="50px" alt="Brand Logo" />
                  </div>
                  <div>
                    <h4>Ecommerce Growth Hack</h4>
                    <h6>Beat your competitors by reaching the unexplored corners of digital commerce. </h6>
                  </div>
                </div>              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

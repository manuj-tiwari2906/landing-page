import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import OnlineClass from "../../img/online-maximum.jpeg";
import OfflineClass from "../../img/classroom-maximum.jpg";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <div className="heading-container">
        <span style={{ color: darkMode ? "white" : "" }}>JOIN OUR PROGRAM</span>
        <span>STAY AHEAD OF THE LEAGUE</span>
      </div>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="swipe-card">
            <img src={OnlineClass} />
            <div className="card-head">Online Training Courses</div>
            <div style={{ textAlign: "left" }}>
              Career defining courses. Practical Approach. Global Certifications
            </div>
            <div
              style={{
                color: "#fca61f",
                fontWeight: 600,
                width: "100%",
                textAlign: "left",
              }}
            >
              {"View Programs ->"}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-card">
            <img src={OfflineClass} />
            <div className="card-head">Classroom Training Program</div>
            <div style={{ textAlign: "left" }}>
              Career defining courses. Practical Approach. Global Certifications
            </div>
            <div
              style={{
                color: "#fca61f",
                fontWeight: 600,
                width: "100%",
                textAlign: "left",
              }}
            >
              {"View Programs ->"}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

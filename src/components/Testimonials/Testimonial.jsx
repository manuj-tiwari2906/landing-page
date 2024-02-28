import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I'm grateful to Maximum Learning for offering courses in Digital Marketing and Data Science. Thanks to Mr. Salman, I'm ready to take on the digital landscape.",
    },
    {
      img: profilePic2,
      review:
        "Mr. Priyank's expertise in Digital Marketing is unmatched. His teaching at Maximum Learning is what set me on the path to success.",
    },
    {
      img: profilePic3,
      review:
        "I'm grateful to Maximum Learning for offering courses in Digital Marketing and Data Science. Thanks to Mr. Salman, I'm ready to take on the digital landscape.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic1,
      review:
        "I'm grateful to Maximum Learning for offering courses in Digital Marketing and Data Science. Thanks to Mr. Salman, I'm ready to take on the digital landscape.",
    },
    {
      img: profilePic2,
      review:
        "Mr. Priyank's expertise in Digital Marketing is unmatched. His teaching at Maximum Learning is what set me on the path to success.",
    },
    {
      img: profilePic3,
      review:
        "I'm grateful to Maximum Learning for offering courses in Digital Marketing and Data Science. Thanks to Mr. Salman, I'm ready to take on the digital landscape.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Our </span>
        <span>Alumni Success </span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
      style={{ justifyContent: 'center' }}
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={3}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

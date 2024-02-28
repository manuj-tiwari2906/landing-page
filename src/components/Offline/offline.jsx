import React, { useContext } from "react";
import "./offline.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import AdvanceMarketing from '../../img/advance-digital-marketing.jpeg';
import DigitalMarketing from '../../img/digital-marketing.jpeg';
import DiplomaMarketing from '../../img/diploma-marketing.png';

const Offline = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>Classroom Training Programs</span>
        <spane>
        Our training program will provide you with all the skills necessary to grab high-paying jobs
          <br />
          or grow as an entrepreneur and grab freelancing opportunities.
        </spane>
        <a href={'#'} download>
          <button className="button s-button">Enroll Now</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={DigitalMarketing}
            heading={<span className="title">{`Masters in Digital Marketing`}</span>}
            detail={"Equip yourself with super digital marketing skills through our Master’s Program."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={AdvanceMarketing}
            heading={<span className="title">{`Advance in digital Marketing`}</span>}
            detail={"Advance your digital marketing career with our specialized Advanced Program."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "25rem", left: "25rem" }}
          whileInView={{ top: "25rem", left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={DiplomaMarketing}
            heading={<span className="title">{`Diploma in digital marketing`}</span>}
            detail={
              "Experience the pinnacle of digital marketing excellence with our transformative Elite Program"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Offline;

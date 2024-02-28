import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import OlaLogo from '../../img/olaLogo.png'
import MyntraLogo from '../../img/myntraLogo.png';
import MicrosoftLogo from '../../img/microsoft.png';
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            OUR
          </span>
          <span>Placement Partners</span>
          <spane>
          Enroll now for an immersive educational journey where knowledge knows no bounds,
            <br />
            empowering you to push the limits of your potential
            <br />
            and excel in every facet of your digital endeavors
            <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Book a Trial Now</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={OlaLogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MyntraLogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={MicrosoftLogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

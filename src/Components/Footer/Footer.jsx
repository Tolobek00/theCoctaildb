import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { AiFillDiscord } from "react-icons/ai";

import theM from "../../Assets/images/logo-tsdb.png";
import theB from "../../Assets/images/logo-tmdb.png";
import theD from "../../Assets/images/logo-tadb.png";
import gb from "../../Assets/images/gb.png"

import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <h1>© 2024 TheCocktailDB. Proudly built in the UK <img src={gb} alt="" /></h1>
        </div>
        <div>
          <section>
            <h1>Socials:</h1>
            <FaFacebookSquare className="logo_appsF"/>
            <FaSquareTwitter className="logo_appsT"/>
            <AiFillDiscord className="logo_appsD"/>
          </section>
          <section>
            <img src={theM} alt="" />
            <img src={theB} alt="" />
            <img src={theD} alt="" />
          </section>
        </div>
        <div>
          <h3>Missing </h3>
          <h3>About</h3>
          <h3>Faq </h3>
          <h3>Contact</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

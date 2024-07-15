import React from "react";

import coctailLeft from "../../Assets/images/cocktail_left.png";
import coctailRight from "../../Assets/images/cocktail_right.png";
import support from "../../Assets/images/patreon_logo.png";

import "./support.scss";
import { Link } from "react-router-dom";

function Support() {
  return (
    <div className="support container">
      <div>
        <img src={coctailLeft} alt="" className="coctail_db"/>
      </div>
      <div>
        <h1>Welcome to TheCocktailDB</h1>
        <p>
          An open, crowd-sourced database of drinks and cocktails from around
          the world. <br /> We also offer a
          <Link to={"https://www.thecocktaildb.com/api.php"} className="h3">
            free cocktail API.
          </Link>
          for anyone wanting to use it. <br /> If you like the site, please consider
          supporting us on Patreon by clicking the link below...
        </p>
        <section>
          <img src={support} alt="" />
        </section>
        <h3 className="h3">Click to upgrade free API to premium for $3</h3>
        <h4>Currently (313 supporters)</h4>
      </div>
      <div>
        <img src={coctailRight} alt="" className="coctail_db"/>
      </div>
    </div>
  );
}

export default Support;

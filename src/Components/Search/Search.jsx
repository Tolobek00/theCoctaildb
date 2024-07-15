import React from "react";

import { BsSearch } from "react-icons/bs";
import logo_coctail from "../../Assets/images/cocktail-logo.png"
import ingredient from "../../Assets/images/ingredient-logo.png"
import image from "../../Assets/images/image2.png"


import "./search.scss"

function Search() {
  return (
    <div className="search container">
      <div className="input_search">
        <input
          type="text"
          placeholder="Search for a Cocktail..."
        />
        <button><BsSearch /></button>
      </div>
      <div>
        <section>
            <img src={logo_coctail} alt="" />
            <h1>Total Drinks:</h1>
            <h2>636</h2>
        </section>
        <section>
            <img src={ingredient} alt="" />
            <h1>Total Ingredients:</h1>
            <h2>489</h2>
        </section>
        <section>
            <img src={image} alt="" />
            <h1>Drink Images:</h1>
            <h2>636(93cc)</h2>
        </section>
      </div>
    </div>
  );
}

export default Search;

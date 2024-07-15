import React, { useEffect, useState } from "react";
import "./ingredients.scss";
import axios from "axios";

const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

function Ingredients() {
  const [filter, setFilter] = useState([]);

  async function getFilter() {
    try {
      const res = await axios.get(API);
      setFilter(res.data.drinks);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFilter();
  }, []);

  return (
    <div className="ingredients container">
      {filter.slice(0, 8).map((ingredient) => (
        <div key={ingredient.idDrink} className="filter_container">
          <div>
            <img src={ingredient.strDrinkThumb} alt={ingredient.strDrink} />
            <h2>{ingredient.strDrink}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;

import React, { useEffect, useState } from "react";

import "./category.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

function Category() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  async function getCategory() {
    try {
      const res = await axios.get(API);
      setCategory(res.data.drinks);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="category container">
      {category.slice(0, 8).map((like) => (
        <div key={like.idDrink} className="category_map">
          <div>
            {/* <h1>{like.idDrink}</h1> */}
            <img
              src={like.strDrinkThumb}
              alt=""
              onClick={() => navigate("/category")}
            />
            <Link to={"/popular"}>
              <h1>{like.strDrink}</h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;

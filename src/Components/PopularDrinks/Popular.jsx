import React, { useEffect, useState } from "react";

import "./popular.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function Popular() {
  const [coctails, setCategory] = useState([]);
  const navigate = useNavigate();

  async function getCoctail() {
    try {
      const res = await axios.get(API);
      setCategory(res.data.drinks);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCoctail();
  }, []);

  return (
    <div className="coctails container">
      {coctails.map((item) => (
        <div key={item.idDrink}>
          <h1 onClick={() => navigate("/category")}>{item.strDrink}</h1>
          <img src={item.strDrinkThumb} alt="" />
          <Link to={"/popular"}>
            <h1>{item.strCategory}</h1>
          </Link>
        </div>
      ))}
      {coctails.map((item) => (
        <div key={item.idDrink} onClick={() => navigate("/category")}>
          <h1>{item.strDrink}</h1>
          <img src={item.strDrinkThumb} alt="" />
          <h1>{item.strCategory}</h1>
        </div>
      ))}
    </div>
  );
}

export default Popular;

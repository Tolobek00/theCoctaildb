import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gin.scss";

const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

function Gin() {
  const [ingredient, setIngredient] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getIngredient() {
    try {
      const res = await axios.get(API);
      setIngredient(res.data.drinks);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getIngredient();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container_gin">
      {ingredient.map((gin) => (
        <div key={gin.idDrink}>
          <h1>{gin.strDrink}</h1>
          <img src={gin.strDrinkThumb} alt={gin.strDrink} />
        </div>
      ))}
    </div>
  );
}

export default Gin;

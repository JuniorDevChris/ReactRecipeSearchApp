import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [details, setDetails] = useState();
  let { id } = useParams();

  const getDetails = async (name: string | undefined) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${id}?&apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
      );
      const recipeDetails = await data.json();
      setDetails(recipeDetails);
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, [id]);

  return <div>{recip}</div>;
};

export default Recipe;

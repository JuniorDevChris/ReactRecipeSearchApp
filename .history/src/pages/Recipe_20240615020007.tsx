import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  con
  let { id } = useParams();

  const getDetails = async (name: string | undefined) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${id}?&apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
        );
      const recipeDetails = await data.json();

      
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };

  useEffect(() => {
    getCuisine(id);
  }, [id]);

  
  return <h1>Fuck you</h1>;
};

export default Recipe;

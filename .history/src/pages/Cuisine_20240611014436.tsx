import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState<any[]>([]);
  let { params } = useParams();

  const getCuisine = async (name) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=10`
      );
      const recipe = await data.json();
      setCuisine(recipe.results);
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };
  useEffect(() => {
    getCuisine(params);
    console.log(params);
  }, [params]);
  return 
};

export default Cuisine;

const Grid = styled.div`
  display: grid;
  grid-template-colums: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

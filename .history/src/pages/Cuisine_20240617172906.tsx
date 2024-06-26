import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState<any[]>([]);
  let { cuisineType } = useParams();

  const getCuisine = async (name: string | undefined) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&cuisine=${name}&number=9`
      );
      const cuisine = await data.json();
      setCuisine(cuisine.results);
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };

  useEffect(() => {
    getCuisine(cuisineType);
  }, [cuisineType]);

  return (
    <Grid>
      {cuisine.map((recipe) => (
        <Card key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

export default Cuisine;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 2rem;
  
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    color: black;
    padding: 1rem;
  }
`;

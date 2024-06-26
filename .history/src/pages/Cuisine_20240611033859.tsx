import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState<any[]>([]);
  const params = useParams();

  const getCuisine = async (name: string) => {
    console.log("Cuisine name:", name); // Debug the actual value being used in the API call
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&cuisine=${name}&number=10`
      );
      const data = await response.json();
      console.log("Fetched cuisine:", data); // Debug fetched data
      setCuisine(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    if (params.cuisineName) {
      // Ensure this matches your route parameter
      getCuisine(params.cuisineName);
    }
  }, [params.cuisineName]); // Correct dependency if `params` is an object with a property

  return (
    <Grid>
      {cuisine.map((dish) => (
        <Card key={dish.id}>
          <img src={dish.image} alt={dish.title} />
          <h4>{dish.title}</h4>
        </Card>
      ))}
    </Grid>
  );
};

export default Cuisine;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
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
    padding: 1rem;
  }
`;

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
        `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&cuisine=${name}&number=10`
      );
      const cuisine = await data.json();
      setCuisine(cuisine.results);
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };
  useEffect(() => {
    getCuisine(params);
    console.log(params);
  }, [params]);
  return (
    // <Grid>
    //   {cuisine.map((dish) => {
    //     return (
    //       <Card key={dish.id}>
    //         <img src={dish.image} alt={dish.title} />
    //         <h4>{dish.title}</h4>
    //       </Card>
    //     );
    //   })}
    // </Grid>
    {cuisine.map((dish =>{
        return (
            <ima>
        )
    }))}
    // {cuisine.map((dish) => {
    //     return (
    //         <img src={dish.image} alt={dish.title} />
    //         <h4>{dish.title}</h4>
    //     );
    //   })}
  );
};

export default Cuisine;

const Grid = styled.div`
  display: grid;
  grid-template-colums: repeat(auto-fit, minmax(20rem, 1fr));
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

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styled from "styled-components";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState<any[]>([]);
  let { searchRecipe } = useParams();

  const getSearchedRecipes = async (name: string | undefined) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&query=${name}&number=9`
      );
      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
      console.log(recipes.results);
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };

  useEffect(() => {
    getSearchedRecipes(searchRecipe);
  }, [searchRecipe]);

  return (
    <Grid>
      {searchedRecipes.map((recipe) => (
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

export default Searched;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  margin-top: 12rem;
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
    color: black;
  }
`;

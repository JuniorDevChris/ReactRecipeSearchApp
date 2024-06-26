import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let { searchRecipe } = useParams();

  const getSearchedRecipes = async (name: string | undefined) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&query=${name}&number=10`
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
      {searc.map((dish) => (
        <Card key={dish.id}>
          <img src={dish.image} alt={dish.title} />
          <h4>{dish.title}</h4>
        </Card>
      ))}
    </Grid>
  );
};

export default Searched;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 2rem; /* Add gap to create space between the cards */
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

export default Searched;
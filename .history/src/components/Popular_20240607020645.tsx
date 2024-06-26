import { useEffect, useState } from "react";
import styled from "styled-components";
import {} from "@splidejs/react-splide";

const Popular = () => {
  const [popular, setPopular] = useState<any[]>([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=10`
      );
      const response = await api.json();
      setPopular(response.recipes);
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3>Popular Recipes</h3>
            {popular.map((recipe) => {
              return (
                <Card key={recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Popular = () => {
  const [popular, setPopular] = useState<any[]>([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const check = localStorage.getItem("popular");

      if (check) {
        setPopular(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=10`
        );
        const response = await api.json();
        localStorage.setItem("popular", JSON.stringify(response.recipes));
        setPopular(response.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };
  return (
    <Wrapper>
      <h3>Popular Recipes</h3>
      <Splide
        options={{
          perPage: 2,
          arrows: false,
          pagination: false,
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
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
    border-radius: 2rem 5rem 5rem;
    margin: 5rem;
  }
`;

export default Popular;

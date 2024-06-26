import React from "react";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState<any[]>([]);

    useEffect(() => {
      getCuisine();
    }, []);
  
    const getCuisine = async () => {
      try {
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
          {popular.map((recipe) => {
            return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
            );
          })}
      </Wrapper>
    );
};

export default Cuisine;

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 15rem;
  max-width: 25rem;
  border-radius: 2rem;
  margin-left: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
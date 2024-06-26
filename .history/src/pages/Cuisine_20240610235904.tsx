import React from "react";

const Cuisine = () => {
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
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {popular.map((recipe) => {
            return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
      </Wrapper>
    );
};

export default Cuisine;

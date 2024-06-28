export const getVeggieRecipes = async () => {
    try {
      const check = localStorage.getItem("veggie");

      if (check) {
        retuJSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=9`
        );
        const response = await api.json();
        localStorage.setItem("veggie", JSON.stringify(response.recipes));
        setVeggie(response.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };
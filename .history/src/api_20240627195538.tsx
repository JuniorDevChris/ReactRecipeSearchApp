export const getVeggieRecipes = async () => {
  try {
    const check = localStorage.getItem("veggie");

    if (check) {
      return JSON.parse(check);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?dapiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=9`
        // `https://api.spoonacular.com/recipes/random?diet=vegetarian&apiKey=${
        //   import.meta.env.VITE_REACT_APP_API_KEY
        // }&number=9`
      );

      const response = await api.json();
      console.log("Results:");
      console.log(response);
      localStorage.setItem("veggie", JSON.stringify(response.recipes));
      return response.recipes;
    }
  } catch (error) {
    console.error("Error fetching recipe: ", error);
    return [];
  }
};

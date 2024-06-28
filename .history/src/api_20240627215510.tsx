import { Recipe } from "./type/recipe";

export const fetchRecipes = async (storageKey: string, tags?: string): Promise<Recipe[]> => {
  try {
    const cachedData = localStorage.getItem(storageKey);

    if (cachedData) {
      return JSON.parse(cachedData) as Recipe[];
    } else {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
      let apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`;
      if (tags) {
        apiUrl += `&tags=${tags}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      localStorage.setItem(storageKey, JSON.stringify(data.recipes));
      return data.recipes as Recipe[];
    }
  } catch (error) {
    console.error("Error fetching recipes: ", error);
    return [];
  }
};

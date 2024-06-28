import { useEffect, useState } from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggies";
import { Recipe } from "../type/recipe";
import { fetchRecipes } from "../api";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    const getVeggie = async () => {
      const recipes = await fetchRecipes("veggie", "vegetarian");
      setRecipes(recipes);
    };
    getVeggie();
  }, []);
  return (
    <>
      <Veggie recipes={recipes} />
      <Popular />
    </>
  );
};

export default Home;

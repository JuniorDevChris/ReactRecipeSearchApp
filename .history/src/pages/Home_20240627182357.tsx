import { useEffect, useState } from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggies";
import { Recipe } from "../type/recipe";
import { getVeggieRecipes } from "../api";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    const getVeggie = async () => {
      const recipes = await geVeggieRecipes();
      setRecipes(recipes);
    };
    getVeggie();
  }, []);
  return (
    <>
      <Veggie id={recipes} title image} />
      <Popular />
    </>
  );
};

export default Home;
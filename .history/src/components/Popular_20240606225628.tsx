import { useEffect } from "react";

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, []);
  GET https://api.spoonacular.com/recipes/random

  const getPopular = async () => {
    const api = await fetch(``);
    const data = await api.json();
    
  };
  return <div>Popular</div>;
};

export default Popular;

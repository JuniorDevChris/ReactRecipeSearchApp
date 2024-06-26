import { useEffect } from "react";

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, []);
 https://api.spoonacular.com/recipes/random

  const getPopular = async () => {
    const api = await fetch(``);
    const data = await api.json();
    
  };
  return <div>Popular</div>;
};

export default Popular;

import { useEffect } from "react";

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY_}`);
    const data = await api.json();
    
  };
  return <div>Popular</div>;
};

export default Popular;
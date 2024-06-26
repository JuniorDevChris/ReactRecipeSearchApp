import { useEffect } from "react";

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=`);
    const data = await api.json();
    
  };
  return <div>Pop</div>;
};

export default Popular;

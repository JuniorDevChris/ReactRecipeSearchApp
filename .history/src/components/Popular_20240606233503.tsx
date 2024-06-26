import { useEffect } from "react";

const Popular = () => {

  useEffect(() => {
    console.log("Popular")
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `http://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&number=1`
    );
    const data = await api.json();
    console.log(data);
  };
  return <div>Popula</div>;
};

export default Popular;

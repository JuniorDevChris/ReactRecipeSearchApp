import { useEffect, useState } from "react";

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, []);

  const [popular, setPopular] = useState<any[]>([]);

  const getPopular = async () => {
    try {
      
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=10`
      );
      const response = await api.json();
      setPopular(response.recipes);
    } catch (error) {
      console.error(error);
    }
  };
  return <div>
    {popular.map((recipe) =>{
      return (
        <div key={recipe.id}>
          fuck
          <p>{recipe.title}</p>
        </div>
      );
    })}
  </div>;
};

export default Popular;

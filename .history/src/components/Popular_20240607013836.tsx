import { useEffect, useState } from "react";

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, []);

  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&number=10`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
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

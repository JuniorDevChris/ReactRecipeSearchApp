import { useEffect } from "react";

const Popular = () => {
  useEffect(() => {
    console.log("Popular");
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&number=1`
    );
    const data = await api.json();
    console.log(data);
  };
  return <div><Populaq> </Populaq></div>;
};

export default Popular;

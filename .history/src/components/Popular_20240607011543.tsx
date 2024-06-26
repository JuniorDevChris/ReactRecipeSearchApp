import { useEffect } from "react";

const Popular = () => {
  useEffect(() => {
    console.log("f");
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&number=1`
    );
    console.log(api);
    const data = await api.json();
    console.log(data);
  };
  return <div>{data}</div>;
};

export default Popular;

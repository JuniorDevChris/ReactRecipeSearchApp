const Popular = () => {
  const getPopular = async () => {
    const api =
      await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.jso
  };
  return <div>Popular</div>;
};

export default Popular;

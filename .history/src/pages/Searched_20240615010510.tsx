const Searched = () => {
    const getCuisine = async (name: string | undefined) => {
        try {
          console.log("Fetching cuisine");
          const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${
              import.meta.env.VITE_REACT_APP_API_KEY
            }&cuisine=${name}&number=10`
          );
          const cuisine = await data.json();
          console.log("Set cuisine: ", cuisine);
          setCuisine(cuisine.results);
        } catch (error) {
          console.error("Error fetching recipe: ", error);
        }
      };
  return <div>Searched</div>;
};

export default Searched;

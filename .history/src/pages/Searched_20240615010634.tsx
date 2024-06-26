const Searched = () => {
    const getSearched = async (name: string | undefined) => {
        try {
          const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${
              import.meta.env.VITE_REACT_APP_API_KEY
            }&cuisine=${name}&number=10`
          );
          const searchedRecip = await data.json();
          setSearched(searched.results);
        } catch (error) {
          console.error("Error fetching recipe: ", error);
        }
      };
  return <div>Searched</div>;
};

export default Searched;

import {useState, useEffect} from 'react';
const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([]);

    const getSearched = async (name: string | undefined) => {
        try {
          const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${
              import.meta.env.VITE_REACT_APP_API_KEY
            }&query=${name}&number=10`
          );
          const recipes = await data.json();
          setSearchedRecipes(recipes.results);
        } catch (error) {
          console.error("Error fetching recipe: ", error);
        }
      };
      
  return <div>Searched</div>;
};

export default Searched;

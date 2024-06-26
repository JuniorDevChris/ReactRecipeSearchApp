import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
console.log("cuisine
    const [cuisine, setCuisine] = useState<any[]>([]);
    let params = useParams();


  const getCuisine = async (name:string) => {
    try {

        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=10`
        );
        const response = await data.json();
        setCuisine(response.recipes);
      }
      useEffect(() => {
        // getCuisine('');
        console.log(params.type);

      }, [params.type]);
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };

  return 
  <div>

  </div>;
};

export default Cuisine;

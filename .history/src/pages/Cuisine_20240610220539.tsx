import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {

    const [popular, setPopular] = useState<any[]>([]);

  useEffect(() => {
    getCuisine();
  }, []);

  const getCuisine = async (name:string) => {
    try {

        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=10`
        );
        const response = await data.json();
        setC(response.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };

  return 
  <div>

  </div>;
};

export default Cuisine;

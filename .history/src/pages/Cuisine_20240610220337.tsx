import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {

    const [popular, setPopular] = useState<any[]>([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const check = localStorage.getItem("popular");

      if (check) {
        setPopular(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?cuisineapiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=10`
        );
        const response = await api.json();
        localStorage.setItem("popular", JSON.stringify(response.recipes));
        setPopular(response.recipes);
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

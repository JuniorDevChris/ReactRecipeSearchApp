import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {

    const [cuisine, setCuisine] = useState()
    const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=10`)
    const recipes = await data.json();
    }

  return 
  <div>

  </div>;
};

export default Cuisine;

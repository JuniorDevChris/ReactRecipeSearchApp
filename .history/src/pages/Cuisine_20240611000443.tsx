import styled from 'styled-components';
import { motion } from 'framer-motion';
import {Link, useParams} from 'react-router-dom';


const Cuisine = () => {
    const [cuisine, setCuisine] = useState<any[]>([]);

    useEffect(() => {
      getCuisine();
    }, [cuisine]);
  
    const getCuisine = async (name) => {
      try {
          const dat = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}apiKey=${
              import.meta.env.VITE_REACT_APP_API_KEY
            }&number=10`
          const response = await api.json();
          setCuisine(response.recipes);
        }
      } catch (error) {
        console.error("Error fetching recipe: ", error);
      }
    };
    return (
      <Wrapper>
          {cuisine.map((recipe) => {
            return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
            );
          })}
      </Wrapper>
    );
};

export default Cuisine;

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 15rem;
  max-width: 25rem;
  border-radius: 2rem;
  margin-left: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
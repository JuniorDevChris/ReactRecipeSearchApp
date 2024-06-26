import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [details, setDetails] = useState<any>(null);
  let { id } = useParams();

  const getDetails = async (id: string | undefined) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
      );
      const recipeDetails = await data.json();
      setDetails(recipeDetails);
    } catch (error) {
      console.error("Error fetching recipe: ", error);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, [id]);

  return 
  <DetailWrapper>
    <h2>{details.title}</h2>
    <div>
      <img src={details.image} alt="det" />
    </div>
    </DetailWrapper>;
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #3b3b3b, #3b3b3b);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin: 10rem;
`;

export default Recipe;

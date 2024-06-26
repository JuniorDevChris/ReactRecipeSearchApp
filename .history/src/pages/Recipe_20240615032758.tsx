import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [details, setDetails] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("instructions");

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

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <DetailWrapper>
      <Content>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </Content>
      <Info>
        <Button className={ac} onClick={() => setActiveTab("instructions")}>
          Instructions
        </Button>
        <Button onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .active {
    background: linear-gradient(35deg, #3b3b3b, #3b3b3b);
    color: white;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin-bottom: 2rem;
  }

  img {
    max-width: 500px;
    border-radius: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;

  &:last-child {
    margin-right: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Recipe;

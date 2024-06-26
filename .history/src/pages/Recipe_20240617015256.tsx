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
        <ButtonContainer>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonContainer>
        {activeTab === "instructions" && (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: details.summary }}
              style={{ color: "white" }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: details.instructions }}
              style={{ color: "white" }}
            ></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
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
    color: white;
    font-size: 1.5rem;
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
  border-radius: 2rem;
  margin-right: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  max-width: 150px; /* Limit button width */
  flex-shrink: 0; /* Prevent buttons from shrinking */

  &:last-child {
    margin-right: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;

  div,
  ul {
    margin-top: 2rem;
    color: white;
    font-size: 1rem;
  }

  ul {
    padding-left: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default Recipe;
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const [input, setInput] = useState('');

  return (
    <SearchContainer>
      <FormStyle>
        <FaSearch />
        <input onChange={(e) => e.target.value} type="text" placeholder="Search..." value={input} />
      </FormStyle>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2rem; /* Adjust padding as needed to position the search bar */
`;

const FormStyle = styled.form`
  position: relative;
  width: 90%;
  max-width: 600px;
  min-width: 300px;

  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #3b3b3b, #3b3b3b);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    padding-left: 3rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: white;
  }
`;

export default Search;

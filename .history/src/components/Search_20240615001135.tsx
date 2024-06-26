import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <FormStyle>
      <FaSearch />
      <input type="text" placeholder="Search..." />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: relative;
  width: 100%;

  input {
    border: none;
    background: linear-gradient(35deg, #4a90e2, #357abd);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%; /* Ensure the input takes full width */
    padding-left: 3rem; /* Adjust padding to accommodate the icon */
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

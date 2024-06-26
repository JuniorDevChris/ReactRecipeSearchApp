import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form>
      <input type="text" />
    </form>
  );
};

const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    width: 100%;
    input {
        border: none:
        backgroun: linear-gradient(35deg, #4a90e2,
      #357abd);
      font-size: 1.5rem;
      color: white;
      padding: 1rem 3rem;
      border: none;
      border-radius: 1rem;
      outline: none;
    }
      svg{
      position: ab
      }
`;

export default Search;

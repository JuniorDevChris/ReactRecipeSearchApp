import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
// import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <div>
      <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
        <FaHamburger />
        <h4>American</h4>
        <GiNoodles />
        <h4>Thai</h4>
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
    </div>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;

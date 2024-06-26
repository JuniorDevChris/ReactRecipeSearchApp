import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #3b3b3b, #3b3b3b);
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  transform: scale(0.7);

  
  h4 {
    color: white;
    font-size: 1rem;
    margin-top: 0.5rem;
    }

    svg {
      color: white;
      font-size: 2rem;
    }
      &.active {
      background: linear-gradient(to right, #f27121, #ffffff);
        svg{
        color: white;
        }
        h
      }
    `;

export default Category;

import { Link } from

import styled from "styled-components";


const Logo = () => {
  return (
    <LogoWrapper>
      <img src="./public/logo.jpg" alt="Logo" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 6rem;
    border-radius: 2rem;
    margin-top: 2rem;
  }
`;

export default Logo;
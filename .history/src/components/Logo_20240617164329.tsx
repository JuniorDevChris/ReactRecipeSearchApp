import { Link } from "react-router-dom";

import styled from "styled-components";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to={`/`}>
        <img src="./public/logo.jpg" alt="Logo" />
      </Link>
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

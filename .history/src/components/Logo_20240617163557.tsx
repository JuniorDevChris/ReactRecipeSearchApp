import styled from "styled-components";

const Logo = () => {
  return (
    <LogoWrapper>
      <img src="/public/logo.png" alt="Logo" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 50px; // Adjust the size as needed
  }
`;

export default Logo;
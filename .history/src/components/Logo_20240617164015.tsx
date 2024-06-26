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
    max-height: 10re; // Adjust the size as needed
  }
`;

export default Logo;

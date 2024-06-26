// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Search />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #3b3b3b; // Adjust as needed
`;

export default Header;

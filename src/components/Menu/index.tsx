import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #9753e3;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MenuToggle = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    background-color: #9753e3;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
  }
`;

const MenuItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const MenuLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 10px;
  }
`;

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Logo href="/">Logo</Logo>
      <MenuToggle onClick={handleMenuToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path d="M0 0h24v24H0z" fill="none" />
          ) : (
            <path d="M0 0h24v24H0V0z" fill="none" />
          )}
          <path d="M3 18h18v-2H3v2zM3 6v2h18V6H3z" />
        </svg>
      </MenuToggle>
      <MenuList style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <MenuItem>
          <Link href="/">
            <MenuLink>Home</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about">
            <MenuLink>About</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contact">
            <MenuLink>Contact</MenuLink>
          </Link>
        </MenuItem>
      </MenuList>
    </Nav>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ColorPurple } from "@/app/Global/style";

const Nav = styled.nav`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  @media (max-width: 768px) {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
`;

const Logo = styled.a`
  width: 40%;
  padding-left: 1.5rem;
  font-family: "Lilita One", cursive;
  font-size: 30px;

  @media (max-width: 768px) {
    width: 100%;
    color: black;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    font-family: "Lilita One", cursive;
  }
`;

const MenuToggle = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-right: 1rem;
  }
`;

const MenuList = styled.ul<{ isMenuOpen: boolean }>`
  display: flex;
  width: 80%;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    width: 40%;
    border-radius: 0 0 0 10px;
  }
`;

const MenuItem = styled.li`
  padding: 0 90px;

  @media (max-width: 768px) {
    margin: 0 10px;
    margin: 5px 0;
    text-align: center;
    padding: 0;
  }
`;

const MenuLink = styled.a`
  background-color: white;
  color: #9a9a9a;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 10px;
  }
`;

const Itens = styled.div`
    display: flex;
    width: 100%;

  @media (max-width: 768px) {
    display: block;
    justify-content: baseline;
    width: 100%;
  }
`;

const Button = styled.button`
  width: 119px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #9753e3;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin-right: 4rem;

  @media (max-width: 768px) {
    margin: 1rem;
    width: 100px;
    font-size: 12px;
  }
`;

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Logo href="/">
        Letícia <ColorPurple>Dayane</ColorPurple>
      </Logo>
      <MenuToggle onClick={handleMenuToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="black"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path d="M0 0h24v24H0z" fill="none" />
          ) : (
            <path d="M0 0h24v24H0V0z" fill="none" />
          )}
          <path d="M3 18h18v-2H3v2zM3 6v2h18V6H3z" />
        </svg>
      </MenuToggle>
      <MenuList isMenuOpen={isMenuOpen}>
        <Itens>
          <MenuItem>
            <Link href="">
              <MenuLink>Sobre mim</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="">
              <MenuLink>Habilidades</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="">
              <MenuLink>Projetos</MenuLink>
            </Link>
          </MenuItem>
        </Itens>
        <Button>Saiba mais</Button>
      </MenuList>
    </Nav>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "./HomeIcon";

interface NavsProps {
  name: string;
  link: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 8vh;
  background-color: #7895b2;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  @media (min-width: 580px) {
    padding: 0 1rem;
  }
`;
const NavContainer = styled.div`
  height: 100%;
  padding: 0 1rem;
`;
const NavList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  list-style: none;
  margin: 0;
`;
const NavItem = styled.li`
  padding: 0 1rem;
  color: white;
`;
const Nav = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
function Header() {
  const navs = [
    { name: "dev", link: "/dev" },
    { name: "blog", link: "/blog" },
    { name: "about me", link: "/about" },
  ];

  return (
    <Wrapper>
      <IconContainer>
        <HomeIcon />
      </IconContainer>
      <NavContainer>
        <NavList>
          {navs.map((nav: any, key) => (
            <NavItem key={key}>
              <Link href={nav.link}>
                <Nav>{nav.name}</Nav>
              </Link>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
    </Wrapper>
  );
}

export default Header;

"use client"

import Footer from '@/components/Footer';
import Header from '../components/Header';
import AboutMe from './pages/AboutMe';
import Extra from './pages/Extra';
import Habilities from './pages/Habilities';
import Projects from './pages/Projects';
import Menu from '../components/Menu';
// import styled from "styled-components";

// export const Body = styled.body`
//   width: 100vw;
//   background-color: red;
// `

export default function Home() {
  return (
    <>
    <Menu />
    <AboutMe />
    <Habilities />
    <Projects />
    <Extra />
    <Footer />
    </>
  )
}

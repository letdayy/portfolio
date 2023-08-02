"use client"

import Footer from '@/components/Footer';
import Header from '../components/Header';
import AboutMe from './pages/AboutMe';
import Extra from './pages/Extra';
import Habilities from './pages/Habilities';
import Projects from './pages/Projects';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <>
    <Header />
    <AboutMe />
    <Habilities />
    <Projects />
    <Extra />
    <Footer />
    </>
  )
}

"use client"

import Footer from '@/components/Footer';
import AboutMe from './pages/AboutMe';
import Extra from './pages/Extra';
import Habilities from './pages/Habilities';
import Projects from './pages/Projects';
import Menu from '../components/Menu';
import { DarkModeProvider } from '@/services/DarkModeContext';
import { useDarkMode } from "@/services/DarkModeContext";


export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <DarkModeProvider>
    <Menu />
    <AboutMe />
    <Habilities />
    <Projects />
    <Extra />
    <Footer />
    </DarkModeProvider>
  )
}

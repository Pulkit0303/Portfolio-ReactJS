import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {CursorProvider} from './context/CursorContext';

export default function App() {
  const [mousePosition,setMousePosition] =useState({
    x: 0,
    y: 0
  })
  const [cursorVariant,setCursorVariant] = useState("default")
  
  useEffect(()=>{
    const mouseMove =(e) =>{
      setMousePosition({x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove",mouseMove)
    return () =>{
      window.removeEventListener("mousemove",mouseMove)
    }
  },[])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    hovered: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    }
  }
  const mouseEntered =() =>{
    setCursorVariant("hovered")
  }
  const mouseLeaved = () =>{
    setCursorVariant("default")
  }

  return (
    <CursorProvider value={{mouseEntered,mouseLeaved}}>
    <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <motion.div className="cursor"
      variants={variants}
      animate={cursorVariant}></motion.div>
      
      {/* Each page becomes a snap section */}
      <section className="snap-start">
        <HomePage />
      </section>

      <section className="snap-start bg-white text-black">
        <ProjectPage />
      </section>

      <section className="snap-start">
        <ContactPage />
      </section>

    </div>
    </CursorProvider>
  );
}

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import { useEffect, useState } from "react";
import { mix, motion } from "framer-motion";

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
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    }
  }



  return (
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
  );
}

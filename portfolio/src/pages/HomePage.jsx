import { NavBar } from "../components";
import Profile from "../assets/Pic.jpg";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

function HomePage() {
  const {mouseEntered,mouseLeaved} = useCursor();
  return (
    <div className="flex flex-col justify-start py-15 px-30 h-screen">
        {/* NAVBAR */}
        <NavBar />
        {/* TITLE */}
        <motion.div
          className="flex flex-col mt-10"
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-center text-[15vw] font-bold tracking-[-0.03em] leading-none" onMouseEnter={mouseEntered} onMouseLeave={mouseLeaved}>
            {`DEVOPS ENGINEER`}
          </h1>
          <h2 className="font-mono tracking-[20px] [word-spacing:48px] text-xl text-end leading-none">{`BASED IN INDIA`}</h2>
        </motion.div>

        {/* MIDDLE ROW */}
        <motion.div
          className="flex flex-row gap-8 justify-center"
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut"}}
        >
          <div className="flex flex-col justify-end text-3xl font-mono font-bold tracking-[-0.08em]">
            <p>{`/ DEV-OPS ENGINEER`}</p>
            <p>{`/ FRONTEND DEVELOPER`}</p>
            <p>{`/ UI DESIGNER`}</p>
          </div>
          <img
            src={Profile}
            alt="Profile"
            className="lg:shadow-[30px_30px_0_0_rgba(255,255,255,0.1)] w-[350px]"
          />
        </motion.div>

      {/* BOTTOM ROW */}
      <div className="flex flex-row justify-center text-center mt-20">
        <p className="font-mono font-thin lg:text-xl text-sm w-[500px]">
          {`I'M FRESHER DEVOPS ENGINEER, FRONTEND DEVELOPER AND UI DESIGNER WITH CAPABILITY FROM DESIGN TILL DEPLOY APPLICATION.`}
        </p>
      </div>
    </div>
  );
}

export default HomePage;

import { ProjectCard } from "../components";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import {
  AWS,
  Docker,
  Figma,
  Git,
  GitHubActions,
  GitHub,
  Terraform,
  JavaScript,
  Jenkins,
  Linux,
  ReactIcon,
  TailwindCSS,
} from "../assets";
import Xebia from "../assets/Xebia.jpeg";

function ProjectPage() {
  const { mouseEntered, mouseLeaved } = useCursor();
  return (
    <div className="flex flex-row py-15 px-30 h-screen text-center gap-8">
      {/* WORK */}
      <div className="w-[50%] flex flex-col gap-4 ">
        {/* TITLE */}
        <h1 className="text-[5vw] tracking-[-0.06em] border-b-6 leading-none">
          WORK
        </h1>

        {/* WORKS */}
        <div className="flex flex-col gap-8">
          
          {/* ONE */}
          <motion.div
            className="flex flex-col gap-8 items-center"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <ProjectCard
              Position={`PLATFORM ENGINEER`}
              Company={`COMING SOON`}
              date={`OCT 25 - PRESENT`}
              description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia culpa aspernatur maiores beatae minima quae velit nesciunt qui vel libero quis non voluptatem porro cum blanditiis tempore, ad magni eaque. Rem, distinctio velit culpa ducimus officia, nemo dolores facilis ut neque nesciunt sit dolorum deleniti minima? Fugit illum quam ut eius dolores aperiam unde voluptate, iure libero repudiandae, minus quas`}
            />
            <div className="w-[70%] h-1 bg-black/20 rounded-2xl" />
          </motion.div>

          {/* TWO */}
          <motion.div
            className="flex flex-col gap-8 items-center"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <ProjectCard
              Company={`COMPANY Name`}
              date={`MAY 25 - PRESENT`}
              Position={`FRONTEND INTERN`}
              // imgSrc={Xebia}
              description={`Developing an application that allows users to manage poker groups, add players, track sessions with buy-in/out, calculate net results, highlight top earners and losers, generate settlements, maintain persistent records, view aggregated group stats, provide easy navigation, and deliver clear performance insights.`}
            />
            <div className="w-[70%] h-1 bg-black/20 rounded-2xl" />
          </motion.div>

          {/* THREE */}
          <motion.div
            className="flex flex-col gap-8 items-center"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <ProjectCard
              Company={`XEBIA`}
              Position={`DEVOPS INTERN`}
              date={`JUN 24 - JUL 24`}
              imgSrc={Xebia}
              description={`Collaborated with the team to design and develop a comprehensive Gym Management System using Node.js and Express.js, streamlining workflows and enhancing operational efficiency. Additionally, engineered and automated a robust CI/CD pipeline with GitHub Actions, accelerating deployments, improving reliability, and ensuring consistent integration and delivery practices across the application lifecycle.
`}
            />
            <div className="w-[70%] h-1 bg-black/20 rounded-2xl" />
          </motion.div>

        </div>
      </div>

      {/* TECH STACK */}
      <div className="w-[50%] flex flex-col gap-10">
        {/* TITLE */}
        <h1 className="text-[5vw] tracking-[-0.06em] border-b-6 leading-none">
          TECH STACK
        </h1>

        {/* TOOLS */}
        <div className="flex flex-col items-center h-full justify-center">
          <div
            className="w-[800px] h-[800px] bg-black rounded-full flex flex-col justify-evenly items-center p-12"
            onMouseEnter={mouseEntered}
            onMouseLeave={mouseLeaved}
          >
            <div className="flex flex-row justify-evenly w-full">
              <TailwindCSS className="w-22 h-22 hover:scale-110 duration-300" />
              <JavaScript className="w-22 h-22 hover:scale-110 duration-300 rounded-xl" />
              <ReactIcon className="w-22 h-22 hover:scale-110 duration-300" />
            </div>

            <div className="flex flex-row justify-evenly w-full">
              <Git className="w-22 h-22 hover:scale-110 duration-300" />
              <GitHub className="w-22 h-22 hover:scale-110 duration-300 fill-white" />
              <GitHubActions className="w-22 h-22 hover:scale-110 duration-300" />
            </div>

            <div className="flex flex-row justify-evenly w-full">
              <Terraform className="w-22 h-22 hover:scale-110 duration-300" />
              <Jenkins className="w-22 h-22 hover:scale-110 duration-300" />
              <Docker className="w-22 h-22 hover:scale-110 duration-300" />
            </div>

            <div className="flex flex-row justify-evenly w-full">
              <Linux className="w-22 h-22 hover:scale-110 duration-300" />
              <AWS className="w-22 h-22 hover:scale-110 duration-300" />
              <Figma className="w-22 h-22 hover:scale-110 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;

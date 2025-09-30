import {Figma,GitHub} from "../assets";
import { motion } from "framer-motion";

function ProjectCard({ title, description, src, gitLink, figmaLink, className }) {
  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`p-6 bg-white rounded-3xl flex flex-col h-fit w-fit gap-4 text-black ${className}`}
    >
      {/* IMAGE */}
      <div className="w-[580px] h-[290px] bg-black rounded-2xl">
        {/* <img src={src} alt="Project" width={400} className="rounded-2xl" /> */}
      </div>

      {/* TITLE */}
      <div className="font-semibold text-3xl h-fit w-fit leading-none">
        {title}
      </div>

      {/* DESCRIPTION */}
      <div className="font-light text-xl h-fit w-[50px] leading-none my-2">
        {description}
      </div>

      {/* BUTTONS */}
      <div className="flex flex-row justify-around items-center text-white text-2xl mt-8 ">
        {/* GITHUB */}
        <a
          href={gitLink}
          target="_blank"
          className="flex flex-row gap-2 px-9 py-3 bg-black items-center rounded-2xl hover:scale-110 duration-300"
        >
          < GitHub className="w-10 h-10"/>
          {`GitHub`}
        </a>
        {/* FIGMA */}
        <a
          href={figmaLink}
          target="_blank"
          className="flex flex-row gap-2 px-9 py-3 bg-black items-center rounded-2xl hover:scale-110 duration-300"
        >
          <Figma className="w-10 h-10"/>
          {`Figma`}
        </a>
      </div>
    </motion.div>
  );
}
export default ProjectCard;

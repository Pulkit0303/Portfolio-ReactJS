import React from "react";
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

function ProjectPage() {
  return (
    <div className="flex flex-row py-15 px-30 h-screen text-center gap-8">
      {/* WORK */}
      <div className="w-[50%] flex flex-col gap-10 ">
        <h1 className="text-[5vw] tracking-[-0.06em] border-b-6  leading-none">
          WORK
        </h1>
      </div>

      {/* TECH STACK */}
      <div className="w-[50%] flex flex-col gap-10">
        <h1 className="text-[5vw] tracking-[-0.06em] border-b-6 leading-none">
          TECH STACK
        </h1>

        {/* TOOLS */}
        <div className="flex flex-col items-center h-full justify-center">
        <div className="w-[800px] h-[800px] bg-black rounded-full flex flex-col justify-evenly items-center p-12">
          
          <div className="flex flex-row justify-evenly w-full">
            <TailwindCSS className="w-22 h-22 hover:scale-110 duration-300" />
            <JavaScript className="w-22 h-22 hover:scale-110 duration-300 rounded-xl" />
            <ReactIcon className="w-22 h-22 hover:scale-110 duration-300" />
          </div>
          
          <div className="flex flex-row justify-evenly w-full">
            <Git className="w-22 h-22 hover:scale-110 duration-300" />
            <GitHub className="w-22 h-22 hover:scale-110 duration-300" />
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

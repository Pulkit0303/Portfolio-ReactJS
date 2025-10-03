import React from "react";
import { PagesLink, NavLink } from "../components";

function ContactMe() {
  return (
    <div className="flex flex-col px-10 py-6 gap-10  min-h-screen">
      
      {/* Email */}
      <div className="flex flex-col items-end">
        <span className="text-[40px] leading-none">{`CONTACT AT`}</span>
        <a
          href="mailto:pulkit.19.2003@gmail.com"
          className="text-sm font-mono"
        >{`pulkit.19.2003@gmail.com`}</a>
      </div>
      
      {/* Resume */}
      <div className="flex flex-row justify-end">
        <a
          href={{}}
          download
          className="p-2 bg-white w-fit text-black rounded-3xl text-xl"
        >{`DOWNLOAD RESUME HERE`}</a>
      </div>

      {/* Freelance */}
      <div className="flex flex-row justify-end text-center">
        <div className="text-[24px] p-2 border-6">
            {`OPEN`}
            <br />
            {`TO`}
            <br />
            {`FREELANCE`}
        </div>
      </div>

      {/* NavLinks */}
      <div className="flex flex-col text-[20px] gap-2">
        <PagesLink title="ABOUT ME"/>
        <PagesLink title="TECH STACK"/>
      </div>

      {/* Social */}
      <div className="flex flex-row justify-between">
        <NavLink title={`LINKEDIN`} target="_blank" href={``}/>
        <NavLink title={`GitHub`} target="_blank" href={``}/>
        <NavLink title={`TWITTER`} target="_blank" href={``}/>
      </div>

      {/* NAME + Love */}
      <div className="flex flex-col text-center gap-8">
        <h1 className="text-[90px] tracking-[-0.06em] leading-none">{`PULKIT HEDA`}</h1>
        <span className="font-mono text-[8px]">{`MADE WITH 🤍 BY PULKIT`}</span>
      </div>

    </div>
  );
}

export default ContactMe;

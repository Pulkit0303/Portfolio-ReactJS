import Resume from '../assets/Pulkit_Resume.pdf';
import { NavLink,PagesLink } from '../components';
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="grid grid-rows-2 py-10 px-30 h-screen gap-8">
      
      {/* TOP */}
      <div className="row-span-1 flex flex-col items-end justify-around font-mono">
        
        {/* EMAIL */}
        <div className="flex flex-col justify-around text-5xl gap-4 font-bold tracking-widest">
          <span>{`CONTACT AT:`}</span>
          <a href="mailto:pulkit.19.2003@gmail.com">{`pulkit.19.2003@gmail.com`}</a>
        </div>

        {/* RESUME */}
        <a 
          href={Resume} 
          download 
          className="text-4xl bg-white text-black px-4 py-2 rounded-xl"
        >
          {`DOWNLOAD RESUME HERE`}
        </a>

        {/* HYPERLINKS */}
        <div className="flex flex-row justify-start w-full">
          <div className="flex flex-col justify-between text-3xl gap-4">
            <PagesLink title="ABOUT ME"/>
            <PagesLink title="PROJECTS"/>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="row-span-1 flex flex-col gap-4 justify-between">
        
        {/* WORK SOCIAL */}
        <div className="flex flex-row justify-between font-mono font-extralight text-3xl tracking-widest">
          <NavLink
            href="https://www.linkedin.com/in/pulkit-heda-19032003ph/"
            target="_blank"
            title={"LINKEDIN"}
          />
          <NavLink
            href="https://github.com/Pulkit0303"
            target="_blank"
            title={"GITHUB"}
          />
          <NavLink
            href="https://x.com/pulkiit_2003"
            target="_blank"
            title={"TWITTER"}
          />
        </div>

        <motion.div
          className="text-center text-[19vw] font-bold tracking-[-0.03em] leading-none"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          PULKIT HEDA
        </motion.div>

        {/* FOOTER */}
        <span className="text-sm font-mono text-center">
          {`MADE WITH 🖤 BY PULKIT`}
        </span>
      </div>

    </div>
  );
}

export default ContactPage;

import { motion } from "framer-motion";
import ContactMe from '../assets/contactme.svg';

function PagesLink({href,title}) {
  
  const handleClick = (e) => {
    e.preventDefault();
    
    if (title.toLowerCase().includes('contact')) {
      // Scroll to the third section (ContactPage)
      const contactSection = document.querySelectorAll('section')[2];
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (title.toLowerCase().includes('project')) {
      // Scroll to the second section (ProjectPage)
      const projectSection = document.querySelectorAll('section')[1];
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (title.toLowerCase().includes('about')) {
      // Scroll to the first section (HomePage)
      const homeSection = document.querySelectorAll('section')[0];
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.a
      className="flex flex-row gap-1 border-b-3 w-fit items-center cursor-pointer"
      href={href}
      onClick={handleClick}
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { borderColor: "#000000" },
        hover: { borderColor: "#ffffff" },
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {title.toUpperCase()}
      <motion.img
        src={ContactMe}
        alt="contact"
        className="sm:w-10 sm:h-10 w-6 h-6"
        variants={{ rest: { rotate: 0 }, hover: { rotate: -135 } }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.a>
  );
}

export default PagesLink;

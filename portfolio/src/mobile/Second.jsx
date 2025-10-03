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
import {ProjectCard} from '../components' 

function Second() {
  return (
    <div className="flex flex-col h-screen bg-white text-black px-6 py-6">
      
      {/* Tech Stack */}
      <div className="flex flex-col gap-1 flex-shrink-0">
        <h1 className="text-[12vw] border-b-2 border-t-2 leading-none tracking-[-0.06em] text-center">
          TECH STACK
        </h1>
        <div className="flex justify-center items-center mt-4">
          <div className="w-[70vw] max-w-[250px] aspect-square bg-black rounded-full flex flex-col justify-evenly items-center p-4">
            {/* icons grid */}
            <div className="flex flex-row justify-evenly w-full">
              <TailwindCSS className="w-8 h-8" />
              <JavaScript className="w-8 h-8" />
              <ReactIcon className="w-8 h-8" />
            </div>
            <div className="flex flex-row justify-evenly w-full">
              <Git className="w-8 h-8" />
              <GitHub className="w-8 h-8 fill-white" />
              <GitHubActions className="w-8 h-8" />
            </div>
            <div className="flex flex-row justify-evenly w-full">
              <Terraform className="w-8 h-8" />
              <Jenkins className="w-8 h-8" />
              <Docker className="w-8 h-8" />
            </div>
            <div className="flex flex-row justify-evenly w-full">
              <Linux className="w-8 h-8" />
              <AWS className="w-8 h-8" />
              <Figma className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Works*/}
      <div className="flex flex-col flex-1 overflow-y-auto mt-4">
        
        {/* TITLE */}
        <h1 className="text-[12vw] border-b-2 border-t-2 leading-none tracking-[-0.06em] text-center">
          WORKS
        </h1>

        <div className="flex flex-col gap-0.5 mt-2">
          {/* CARD 1 */}

        </div>

      </div>

    </div>
  );
}

export default Second;

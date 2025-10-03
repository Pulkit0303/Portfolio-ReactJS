import { NavBar } from "../components";
import Profile from "../assets/Pic.jpg";


function MainPage() {
  return (
    <div className="flex flex-col px-8 py-6 text-white gap-8 min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center">
        <h1 className="leading-none text-[58px] tracking-[-0.06em] [word-spacing:8px] scale-y-140">
          DEVOPS ENGINEER
        </h1>
        <h6 className="font-mono text-xs tracking-[1em] [word-spacing:20px]">
          BASED IN INDIA
        </h6>
      </div>
      <div className="flex flex-row justify-between gap-10 mt-4">
        <div className="flex flex-row gap-2 items-end text-[14px] text-center text-yellow-200 leading-none">
          <p className="border-1 p-2">{`View in Desktop for better visuals and Animations`}</p>
        </div>
        <img
          src={Profile}
          alt="Proile"
          className="w-[175px] shadow-[20px_20px_0_0_rgba(255,255,255,0.1)]"
        />
      </div>
      <div className="flex flex-col gap-6 mt-4">
        <span className="tracking-[0.4em] font-bold mt-4">
          {`/ DEVOPS ENGINEER`}
          <br />
          {`/ FRONTEND DEVELOPER`}
          <br />
          {`/ UI DESIGNER`}
        </span>
        <p className="font-mono font-thin text-sm text-center mt-4">
          {`I'M FRESHER DEVOPS ENGINEER, FRONTEND DEVELOPER AND UI DESIGNER WITH CAPABILITY FROM DESIGN TILL DEPLOY APPLICATION.`}
        </p>
      </div>
    </div>
  );
}

export default MainPage;

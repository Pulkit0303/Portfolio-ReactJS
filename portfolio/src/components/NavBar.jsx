import PageLink from './PagesLink'

function NavBar() {
  return (
    <div className="flex flex-row justify-between">
      <a
        href="/"
        className="w-fit flex flex-col items-start justify-center font-extrabold text-4xl leading-7 tracking-[-0.04em]"
      >
        {`PULKIT`}
        <br />
        {`HEDA`}
      </a>
      <div className="font-normal font-mono lg:text-3xl text-sm sm:text-xl ">
          <PageLink title={"Contact Me"}/>
      </div>
    </div>
  );
}

export default NavBar;

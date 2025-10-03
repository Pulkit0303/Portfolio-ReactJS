function NavLink({ title, href,target }) {
  return (
    <a
      href={href}
      className="hover:[word-spacing:10px] hover:scale-110 duration-300"
      target={target}
    >{`{ ${title} }`}</a>
  );
}

export default NavLink;

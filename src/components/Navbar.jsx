import { NavLink } from "react-router-dom";

const activeLink = ({isActive}) => isActive ? 'active-link' : ''

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/" className={activeLink}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={activeLink}>Posts</NavLink>
        </li>
        <li>
          <NavLink to="/create" className={activeLink}>Create Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

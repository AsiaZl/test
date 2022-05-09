import { Navbar, NavItem, Nav } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import font from "../Fonts.module.css";

export function Header() {
  return (
    <div>
      <Navbar expand="xs" className={font.fontNav}>
        <Link to="/" className="navbar-brand">
          Jokes
        </Link>
        <Nav navbar>
          <NavItem>
            <NavLink to="/categories" className="nav-link">
              Categories
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/favorites" className="nav-link">
              Favorite
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

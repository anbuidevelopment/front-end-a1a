import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav.jsx';
import NavItem from './Nav/NavItem.jsx';

const NavBar = () => {
  return (
    <>
      <header>
        <Nav>
          <NavItem href='/' isActive>
            Sewing
          </NavItem>
          <NavItem href='/non' isActive>
            No Sewing
          </NavItem>
        </Nav>
        {/* </div> */}
      </header>
      <article>
        <Outlet />
      </article>
    </>
  );
};

export default NavBar;

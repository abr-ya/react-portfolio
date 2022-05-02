import { images } from '../../constants';
import MobileMenu from './MobileMenu';
import './navbar.scss';

const menuItems = ['home', 'about', 'work', 'skills', 'contact'];

function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.react} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {menuItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <MobileMenu menuItems={menuItems} />
    </nav>
  );
}

export default Navbar;

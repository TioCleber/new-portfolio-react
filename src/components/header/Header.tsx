import { Link } from "react-router-dom";
import image from '../../assets/tioCleber.jpg'

import '../../styles/components/header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-header">
        <ul className="ul-header">
          <li className="li-header">
            <Link className="link-header" to="/">
              <img src={image} alt="cleber" title="cleber" />
            </Link>
          </li>
          <li className="li-header">
            <Link className="link-header" to="/">
              Cleber
            </Link>
          </li>
        </ul>

        <ul className="ul-header">
          <li className="li-header">
            <Link className="link-header" to="/sobre">
              sobre
            </Link>
          </li>

          <li className="li-header">
            <Link className="link-header" to="projetos">
              projetos
            </Link>
          </li>

          <li className="li-header">
            <Link className="link-header" to="skills">
              skills
            </Link>
          </li>

          <li className="li-header">
            <Link className="link-header" to="contato">
              contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

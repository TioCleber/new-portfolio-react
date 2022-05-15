import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-header">
        <Link className="link-header" to="/">
          Portfolio Cleber
        </Link>

        <ul className="ul-header">
          <li className="li-header">
            <Link className="link-header" to="sobre">
              sobre
            </Link>
          </li>

          <li className="li-header">
            <Link className="link-header" to="projetos">
              projetos
            </Link>
          </li>

          <li className='li-header'>
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

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://previews.123rf.com/images/vahidgence/vahidgence2308/vahidgence230800180/211726353-icona-dello-spazio-icona-isolata-di-saturno.jpg"
            alt="Logo"
            height="60"
          />
        </Link>

        {/* Toggler per la versione mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenuto della navbar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Link alla Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* Link agli Articoli */}
            <li className="nav-item">
              <Link className="nav-link" to="/articles">
                Articoli
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

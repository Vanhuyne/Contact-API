import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleModal, nbOfContacts }) => {
  return (
    <header className="header">
      <div className="container">
        <h3>Contact List ({nbOfContacts})</h3>

        {/* add event click */}
        <button className="btn " onClick={() => toggleModal(true)}>
          <i className="bi bi-plus">Add New Contact</i>
        </button>
      </div>
      <div className="container">
        <Link to="/login" className="btn ">
          Login
        </Link>
      </div>
    </header>
  );
};
export default Header;

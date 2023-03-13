import React from "react";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <div className="container pt-1">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ps-0">
          <a className="navbar-brand brand fs-1 "><i className="fa-solid fa-book-open-reader me-2 logo"></i>Learner</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item me-4">
                <Link to="/" className="text-decoration-none nav-link active fs-5"  >Home</Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/students" className="text-decoration-none nav-link active fs-5">Students</Link>
              </li>
              <li className="nav-item ">
                <Link to="/login" className="text-decoration-none nav-link active fs-5">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>     
      <hr/>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          Fun With Triangles
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/#">
                Home (Quiz)
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculate-hypotenuse">
                Calculate Hypotenuse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculate-area">
                Area Of Triangle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/isTriangle">
                Is Triangle
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
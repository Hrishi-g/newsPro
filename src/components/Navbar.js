import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Newsitem.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              news Pro
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
                <li>
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                {/*<li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><div className="dropdown-item">India</div></li>
            <li><div className="dropdown-item">USA</div></li> 
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> 
                </li>*/}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

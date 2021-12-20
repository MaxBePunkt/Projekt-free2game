import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showSettings() {
    let menu = document.querySelector(".sidebar-nav");
    let burger = document.querySelector(".burger");
    let burgerActive = document.querySelector(".burger-active");
    menu.classList.toggle("active-menu");
    burger.classList.toggle("show");
    burgerActive.classList.toggle("show");
  }
  render() {
    return (
      <nav>
        <section className="sidebar-nav">
          <div onClick={this.showSettings} className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div onClick={this.showSettings} className="burger-active show">
            <span></span>
            <span></span>
          </div>
          <div className="menu-nav">
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              <div className="link-wrap">
                <img src="../../img/home.svg" alt="home" />
                Home
              </div>
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/all"
            >
              <div className="link-wrap">
                <img src="../../img/pad.svg" alt="pad" />
                All Games
              </div>
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/recently"
            >
              <div className="link-wrap">
                <img src="../../img/plus.svg" alt="plus" />
                Recently Added
              </div>
            </NavLink>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="top-nav">
          <div>
            <NavLink to="/">
              <img src="../../img/logo.svg" alt="plus" />
            </NavLink>
            <p>FREE2GAME</p>
          </div>
          <div>
            <input type="text" name="searchInput" id="searchInput" />
          </div>
        </section>
      </nav>
    );
  }
}

export default Nav;

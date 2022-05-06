import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import logo from "./logo.png";
import { FaHome, FaPizzaSlice } from "react-icons/fa";

const Navbar = () => {
  function animation() {
    let tabsNewAnim = $("#navbarSupportedContent");
    let activeItemNewAnim = tabsNewAnim.find(".active");
    let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    let itemPosNewAnimTop = activeItemNewAnim.position();
    let itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      let activeWidthNewAnimHeight = $(this).innerHeight();
      let activeWidthNewAnimWidth = $(this).innerWidth();
      let itemPosNewAnimTop = $(this).position();
      let itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="">
              <i>
                <FaHome />
              </i>
              Home
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <i class="bi bi-file-earmark-person"></i>
              About
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/recipes">
              <i>
                {" "}
                <FaPizzaSlice />
              </i>
              Recipes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/calories">
              <i class="bi bi-bar-chart-line-fill"></i>
              Calories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              <i class="bi bi-file-earmark-person"></i>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

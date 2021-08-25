import { useEffect, useRef } from "react";
import logo from "../../Assets/Images/cod-logo-white.svg";
import arrow from "../../Assets/Images/menu_arrow.svg";
import "./Header.css";

export default function Header() {
  // Handling animations and showing menu
  const handleMenuClick = () => {
    // Get the elements
    var header = document.querySelector("#header");
    var one = document.querySelector("#one");
    var two = document.querySelector("#two");
    var three = document.querySelector("#three");
    var menu_burger = document.querySelector("#menu-burger");

    // Create animations
    if (menu_burger.classList.contains("active")) {
      menu_burger.classList.remove("active");

      //Revert turn animations
      one.style.animation = "one-turn-revert 1s ease forwards";
      three.style.animation = "three-turn-revert 1s ease forwards";

      // Add transition delay
      one.style.transition = "top 0.3s ease 0.6s";
      two.style.transition = "0.3s ease 0.6s";
      three.style.transition = "top 0.3s ease 0.6s";
      one.style.top = "25%";
      two.style.opacity = "1";
      three.style.top = "75%";
    } else {
      menu_burger.classList.add("active");

      // Add initial transtions
      one.style.transition = "0.3s ease";
      two.style.transition = "0.3s ease";
      three.style.transition = "0.3s ease";

      one.style.top = "50%";
      two.style.opacity = "0";
      three.style.top = "50%";

      //Add turn animations
      one.style.animation = "one-turn 1s 0.3s ease forwards";
      three.style.animation = "three-turn 1s 0.3s ease forwards";
    }

    // Open Nav-Panel
    if (header.classList.contains("active")) {
      // Remove active
      header.classList.remove("active");

      // Hide Nav-Panel
    } else {
      // Add active
      header.classList.add("active");
    }
  };

  const handleSubNavClick = (e, subnav) => {
    var subNav = document.querySelector("#" + subnav);

    if (e.target.classList.contains("active")) {
      // Remove Active
      e.target.classList.remove("active");

      // Hide SubNav
      subNav.style.display = "none";
    } else {
      // Add Active
      e.target.classList.add("active");
      e.target.style.color = "white";

      // Show SubNav
      subNav.style.display = "block";
    }
  };

  return (
    <div id="header">
      <div id="mobile">
        <div id="top-nav">
          <div id="logo">
            <a href="#">
              <img src={logo} alt="Call Of Duty" />
            </a>
          </div>
          <div id="purchase">
            <div id="top-line"></div>
            <button id="buy-btn">
              <a href="#">PLAY NOW</a>
            </button>
            <div id="bottom-line"></div>
          </div>
          <div id="nav-btn">
            <div id="menu-burger" onClick={handleMenuClick}>
              <div className="bar" id="one"></div>
              <div className="bar" id="two"></div>
              <div className="bar" id="three"></div>
            </div>
          </div>
        </div>
        <div id="mobile-nav-panel">
          <div id="inner-panel">
            <nav id="nav-links">
              <div
                className="link games"
                onClick={(e) => {
                  handleSubNavClick(e, "games-sub-nav");
                }}
              >
                <a>Games</a>
                <img src={arrow} alt="" />
              </div>

              {/* Games sub-nav */}
              <div id="games-sub-nav">
                <div className="sublink">
                  <a href="#">Black Ops Cold War</a>
                </div>
                <div className="sublink">
                  <a href="#">Modern Warfare</a>
                </div>
                <div className="sublink">
                  <a href="#">Warzone</a>
                </div>
                <div className="sublink">
                  <a href="#">Call Of Dutty: Mobile</a>
                </div>
              </div>

              <div className="link">
                <a href="#">News</a>
              </div>
              <div
                className="link esports"
                onClick={(e) => {
                  handleSubNavClick(e, "esports-sub-nav");
                }}
              >
                <a>Esports</a>
                <img src={arrow} alt="" />
              </div>

              {/* ESPORTS sub-nav */}
              <div id="esports-sub-nav">
                <div className="sublink">
                  <a href="#">Call of Dutty League</a>
                </div>
                <div className="sublink">
                  <a href="#">World Series of Warzone</a>
                </div>
              </div>

              <div className="link">
                <a href="#">Support</a>
              </div>
              <div className="link">
                <a href="#">My Call Of Dutty</a>
              </div>
              <div className="link">
                <a href="#">Login</a>
              </div>
              <div className="link">
                <a href="#">Sign Up</a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div id="desktop">
        <div id="left-side">
          <div id="logo">
            <a href="#">
              <img src={logo} alt="Call Of Duty" />
            </a>
          </div>

          <div id="desktop-nav-panel">
            <nav id="nav-links">
              <div className="link games">
                <a>
                  Games
                  <img src={arrow} alt="" />
                </a>

                {/* Games sub-nav */}
                <div id="games-sub-nav">
                  <div className="sublink">
                    <a href="#">
                      <span className="left-wing">|</span>
                      Black Ops Cold War
                      <span className="right-wing">|</span>
                    </a>
                  </div>
                  <div className="sublink">
                    <a href="#">
                      <span className="left-wing">|</span>
                      Modern Warfare
                      <span className="right-wing">|</span>
                    </a>
                  </div>
                  <div className="sublink">
                    <a href="#">
                      <span className="left-wing">|</span>
                      Warzone
                      <span className="right-wing">|</span>
                    </a>
                  </div>
                  <div className="sublink">
                    <a href="#">
                      <span className="left-wing">|</span>
                      Call Of Dutty: Mobile
                      <span className="right-wing">|</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="link">
                <a href="#">News</a>
              </div>
              <div className="link esports">
                <a>
                  Esports
                  <img src={arrow} alt="" />
                </a>

                {/* ESPORTS sub-nav */}
                <div id="esports-sub-nav">
                  <div className="sublink">
                    <a href="#">
                      <span className="left-wing">|</span>
                      Call of Dutty League
                      <span className="right-wing">|</span>
                    </a>
                  </div>
                  <div className="sublink">
                    <a href="#">
                      <span className="left-wing">|</span>
                      World Series of Warzone
                      <span className="right-wing">|</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="link">
                <a href="#">Support</a>
              </div>
            </nav>
          </div>
        </div>

        <div id="right-side">
          <div id="sso">
            <a href="#">Login</a>
            <span id="bar">|</span>
            <a href="#">Sign Up</a>
          </div>
          <div id="mycod-btn">
            <a href="#" id="mycod">
              My Call Of Dutty
            </a>
          </div>

          {/* Play Now Button */}
          <div id="purchase">
            <div id="top-line"></div>
            <button id="buy-btn">
              <a href="#">PLAY NOW</a>
            </button>
            <div id="bottom-line"></div>
          </div>
        </div>
      </div>
      {/* END OF DESKTOP NAV */}
    </div>
  );
}

import "./Footer.css";

// Import images
import treyarch from "../../Assets/Images/footer_icons/treyarch.svg";
import raven from "../../Assets/Images/footer_icons/raven1.png";
import highmoon from "../../Assets/Images/footer_icons/highmoon-studios-logo.png";
import beenox from "../../Assets/Images/footer_icons/logo_beenox_small.png";
import hammer_games from "../../Assets/Images/footer_icons/sledgehammer-logo-new.png";
import infinity_ward from "../../Assets/Images/footer_icons/inifinity_ward.svg";
import demonware from "../../Assets/Images/footer_icons/demonware-logo.png";
import shangai_studio from "../../Assets/Images/footer_icons/shanghai-studio-logo.png";
import toys_for_bob from "../../Assets/Images/footer_icons/toysForbob.svg";
import activision from "../../Assets/Images/footer_icons/activision.svg";
import pegi18 from "../../Assets/Images/footer_icons/pegi-18.jpg";

export default function footer() {
  return (
    <div className="footer">
      <div className="inner__footer">
        <div className="footer__nav mobile-only">
          <div className="footer__link">
            <a href="#">Legal</a>
          </div>
          <div className="footer__link">
            <a href="#">Terms Of Use</a>
          </div>
          <div className="footer__link">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer__link">
            <a href="#">Coockie Policy</a>
          </div>
          <div className="footer__link">
            <a href="#">Support</a>
          </div>
        </div>

        <div className="footer__nav desktop-only">
          <div className="footer__link">
            <a href="#">Legal</a>
          </div>
          <div className="bar-break">|</div>
          <div className="footer__link">
            <a href="#">Terms Of Use</a>
          </div>
          <div className="bar-break">|</div>
          <div className="footer__link">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="bar-break">|</div>
          <div className="footer__link">
            <a href="#">Coockie Policy</a>
          </div>
          <div className="bar-break">|</div>
          <div className="footer__link">
            <a href="#">Support</a>
          </div>
        </div>

        <div className="studios">
          <ul>
            <li className="studios__link">
              <a href="#">
                <img className="studio__img" src={treyarch} alt="treyarch" />
              </a>
            </li>
            <li className="studios__link">
              <a href="#">
                <img className="studio__img" src={raven} alt="raven" />
              </a>
            </li>
            <li className="studios__link">
              <a href="#">
                <img className="studio__img" src={highmoon} alt="highmoon" />
              </a>
            </li>
            <li className="studios__link">
              <a href="#">
                <img className="studio__img" src={beenox} alt="beenox" />
              </a>
            </li>
            <li className="studios__link">
              <a href="#">
                <img
                  className="studio__img hammer_games"
                  src={hammer_games}
                  alt="sledge hammer games"
                />
              </a>
            </li>
            <li className="studios__link">
              <a href="#">
                <img
                  className="studio__img"
                  src={infinity_ward}
                  alt="infinity ward"
                />
              </a>
            </li>
            <li className="studios__link">
              <a href="#">
                <img className="studio__img" src={demonware} alt="demonware" />
              </a>
            </li>
            <li className="studios__link">
              <a href="#">
                <img
                  className="studio__img"
                  src={shangai_studio}
                  alt="activision shanghai studio"
                />
              </a>
            </li>
            <li className="studios__link">
              <a href="#">
                <img
                  className="studio__img"
                  src={toys_for_bob}
                  alt="toys for bob"
                />
              </a>
            </li>
            <li className="studios__link mobile-activision">
              <a href="#">
                <img
                  className="studio__img"
                  src={activision}
                  alt="activision"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="pegi">
          <div className="desktop-activision">
            <a href="#">
              <img className="studio__img" src={activision} alt="activision" />
            </a>
          </div>
          <div className="pegi__img">
            <a href="#">
              <img src={pegi18} alt="Pegi-18" />
            </a>
          </div>
        </div>

        <p>
          © 2021 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, MODERN
          WARFARE, CALL OF DUTY MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL OF
          DUTY GHOSTS, CALL OF DUTY ADVANCED WARFARE, CALL OF DUTY INFINITE
          WARFARE, CALL OF DUTY WWII and the CALL OF DUTY WORLD LEAGUE Logo are
          trademarks of Activision Publishing, Inc. All other trademarks and
          trade names are property of their respective owners.
        </p>
      </div>
    </div>
  );
}

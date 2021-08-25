import "./Banner.css";
import tile_logo from "../../Assets/Images/banner-tile-logo.png";

export default function Banner() {
    return (
        <div id="banner">
            <div id="tile-bg">
                <div className="mobile-only" id="banner-img"></div>
                <div className="desktop-only" id="banner-img"></div>
            </div>
            <div id="tile-content">
                <div id="text-wrapper">
                    <div id="tile-logo">
                        <h1>
                            <img
                                src={tile_logo}
                                alt="Call of Duty: Black Ops Cold War | Warzone"
                            />
                        </h1>
                    </div>
                    <div id="tile-title">
                        <h2>Rush into Season Four Reloaded Available Now</h2>
                    </div>
                    <div id="tile-btn">
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

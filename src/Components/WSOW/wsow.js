import twitch_logo from "../../Assets/Images/WSOW-twitch-logo.svg";
import "./WSOW.css";

export default function WSOW() {
  return (
    <div id="wsow-container">
      <div id="img-container">
        <img src={twitch_logo} alt="" />
      </div>

      <div id="info">
        <div id="content">
          <div id="text">The Action Continues August 4th</div>
        </div>
        <div id="wsow-info-btn">
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
}

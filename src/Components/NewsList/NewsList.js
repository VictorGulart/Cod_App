import "./Newslist.css";
import { useState } from "react";

// NOT SUPPOSED TO BE HERE ON OFFICAL WEBSITE
import bo1 from "../../Assets/Images/bo/BOCW-S4-Hijacked-Map-Intel-TOUT.jpg";
import bo2 from "../../Assets/Images/bo/Prestige-Primer-Ep27-TOUT.jpg";

import wz1 from "../../Assets/Images/wz/WZ-WW011-TOUT.jpg";
import wz2 from "../../Assets/Images/wz/WZ-WW007-TOUT.jpg";

import codmo1 from "../../Assets/Images/cod_mo/CODM-S6-Announcement-TOUT.jpg";
import codmo2 from "../../Assets/Images/cod_mo/CODM-Clan-Wars-TOUT.jpg";

import codl1 from "../../Assets/Images/codl/CDL-LAUNCH-PACK-TOUT.jpg";
import codl2 from "../../Assets/Images/codl/En-NA-CDL-Playoffs-WatchNow-WereLive-STAT-1080x1080-0.jpg";

import mw1 from "../../Assets/Images/mw/RUR-49-TOUT.jpg";
import mw2 from "../../Assets/Images/mw/RUR-48-TOUT.jpg";

// Header icons
import bo from "../../Assets/Images/cw-icon.png";
import wz from "../../Assets/Images/wz-icon.png";
import codmo from "../../Assets/Images/icons/cod-m-icon.png";
import codl from "../../Assets/Images/cdl-icon.png";
import mw from "../../Assets/Images/kronos-icon.png";

const data = [
  // BO
  {
    img: bo1,
    text: "Tactical Map Intel: Hijacked",
    filter: "bo",
  },
  {
    img: bo2,
    text: "Tips for Season Three’s Final 10 Multiplayer Challenges",
    filter: "bo",
  },
  // WZ
  {
    img: wz1,
    text: "Tactical Map Intel: HijackedWarzone Wednesday — July 7, 2021",
    filter: "wz",
  },
  {
    img: wz2,
    text: "Warzone Wednesday: June 9",
    filter: "wz",
  },
  // CODMO
  {
    img: codmo1,
    text: "Tactical Map Intel: HijackedTurn Up the Heat in Season Six!",
    filter: "codmo",
  },
  {
    img: codmo2,
    text: "Tactical Map Intel: HijackedCall of Duty Mobile: Clan Wars",
    filter: "codmo",
  },
  // CODL
  {
    img: codl1,
    text: "Tactical Map Intel: HijackedCall of Duty League Pack Live, 2021 Season Structure Announced",
    filter: "codl",
  },
  {
    img: codl2,
    text: "Join Us Live for the 2020 Call of Duty League Playoffs",
    filter: "codl",
  },
  // MW
  {
    img: mw1,
    text: "Top Ten Modern Warfare® and Warzone™ Loadouts",
    filter: "mw",
  },
  {
    img: mw2,
    text: "Five Tricks to Perfect in Warzone™",
    filter: "mw",
  },
];

const ListItem = ({ idx, img, text }) => {
  return (
    <a href="#" className="list-links">
      <div id={`item-${idx}`}>
        <img src={img} alt="" className="content-img" />
        <p className="news-text">{text}</p>
      </div>
    </a>
  );
};

export default function NewsList() {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (e) => {
    console.log(e.target);
    setFilter(e.target.id);
  };

  const items = data.map((item, idx) => {
    if (filter == item["filter"]) {
      return (
        <ListItem key={idx} id={idx} text={item["text"]} img={item["img"]} />
      );
    } else if (filter == "all") {
      return (
        <ListItem key={idx} id={idx} text={item["text"]} img={item["img"]} />
      );
    }
  });

  return (
    <div id="news-list">
      <div id="list-wrapper">
        <div id="list-header">
          <div id="title">Latest News</div>
          <div id="filters">
            <div id="all" onClick={handleFilterClick}>
              All
            </div>
            <img src={bo} id="bo" onClick={handleFilterClick} alt="" />
            <img src={wz} id="wz" onClick={handleFilterClick} alt="" />
            <img src={codmo} id="codmo" onClick={handleFilterClick} alt="" />
            <img src={codl} id="codl" onClick={handleFilterClick} alt="" />
            <img src={mw} id="mw" onClick={handleFilterClick} alt="" />
          </div>
        </div>
        <div id="news-content">{items}</div>
        <div id="show-btn">
          <a href="#">Show More</a>
        </div>
      </div>
    </div>
  );
}

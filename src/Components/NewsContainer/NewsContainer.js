// Importing images
import NewsList from "../NewsList/NewsList";
import warzone from "../../Assets/Images/season-four-wz-tout.jpg";
import warzoneIcon from "../../Assets/Images/wz-icon.png";
import bo_cw from "../../Assets/Images/tout-bocw-s4-bp.jpg";
import boIcon from "../../Assets/Images/cw-icon.png";
import cod_league from "../../Assets/Images/cdl-tout-league-stage-V-wk-3.jpg";
import codlIcon from "../../Assets/Images/cdl-icon.png";
import cod_mo from "../../Assets/Images/cod-m-s5-b.jpg";
import codmoIcon from "../../Assets/Images/cod-m-icon.png";

// Import CSS
import "./NewsContainer.css";

let info = [
  {
    bgImg: warzone,
    text: "Brace for Impact Season Four Is Available Now",
    icon: warzoneIcon,
  },
  {
    bgImg: bo_cw,
    text: "Get Access to all 100 Tiers of Battle Pass Content",
    icon: boIcon,
  },
  {
    bgImg: cod_league,
    text: "Tune In To Call Of Duty League Stage V Week 3",
    icon: codlIcon,
  },
  {
    bgImg: cod_mo,
    text: "Call Of Duty Mobile: Season 6 - The Heat",
    icon: codmoIcon,
  },
];

function Card({ id, img, icon, text }) {
  let style = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div className={`card-${id}`}>
      <a href="#" className="inner">
        <div className="img-container">
          <img src={img} alt="" className="img" />
        </div>

        <div className="card-content">
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <div className="text">
            <h3>{text}</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function NewsContainer() {
  const cards = info.map((item, idx) => {
    return (
      <Card
        key={idx}
        id={idx}
        img={item["bgImg"]}
        icon={item["icon"]}
        text={item["text"]}
      />
    );
  });

  return (
    <div id="news-container">
      <div id="cards-grid">{cards}</div>
      <NewsList />
    </div>
  );
}

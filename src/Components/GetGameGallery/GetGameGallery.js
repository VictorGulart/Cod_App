import "./GetGameGallery.css";
import { useRef, useEffect } from "react";

// Images
import cw from "../../Assets/Images/getGame/desktop/game-select-zeus-desktop.jpg";
import cw_mo from "../../Assets/Images/getGame/mobile/game-select-CW-mobile.jpg";
import wz from "../../Assets/Images/getGame/desktop/game-select-wz2-desktop.jpg";
import wz_mo from "../../Assets/Images/getGame/mobile/game-select-WZ2-mobile.jpg";
import battlepass from "../../Assets/Images/getGame/desktop/game-select-bocw-battle-pass-s4-desktop.jpg";
import mw from "../../Assets/Images/getGame/desktop/game-select-MW-desktop.jpg";
import mw_mo from "../../Assets/Images/getGame/mobile/game-select-MW.jpg";
import codmo from "../../Assets/Images/getGame/desktop/game-select-CODM-desktop.jpg";
import codmo_mo from "../../Assets/Images/getGame/mobile/game-select-CODM.jpg";

const info = [
    {
        id: "cw",
        name: "Call of Duty: Black Ops Cold War",
        img: cw,
        img_mo: cw_mo,
        links: {
            playstation: "play",
            xbox: "xbox",
            battlenet: "battlenet",
        },
        discount_text: (
            <p>
                Up To 50% Off <sup>*SRP </sup>
            </p>
        ),
        platform: true,
    },
    {
        id: "wz",
        name: "Warzone",
        img: wz,
        img_mo: wz_mo,
        links: {
            playstation: "play",
            xbox: "xbox",
            battlenet: "battlenet",
        },
        platform: true,
    },
    {
        id: "battlepass",
        img: battlepass,
        platform: false,
    },
    {
        id: "mw",
        img: mw,
        img_mo: mw_mo,
        links: {
            playstation: "play",
            xbox: "xbox",
            battlenet: "battlenet",
        },
        platform: true,
    },
    {
        id: "codmo",
        img: codmo,
        img_mo: codmo_mo,
        links: {
            playstation: "play",
            xbox: "xbox",
            battlenet: "battlenet",
        },
        platform: false,
        url: "https://www.callofduty.com/uk/en/home",
    },
];

function PlatformPanel(props) {
    return (
        <div className="slider" id={`platform-${props.item.id}`}>
            <div
                id={`platforms-container-${props.item.id}`}
                className="slider__inner"
            >
                <div className="slider__nav__btn">
                    <button className="btn--clear" onClick={props.toPortal}>
                        <i className="fas fa-less-than"></i>
                    </button>
                </div>
                <div className="slider__title">
                    <p>Choose Your Platform</p>
                </div>
                <div className="slider__content">
                    <div className="platforms">
                        <div className="platforms__container">
                            <div className="platform">
                                <a className="platform__link" href="#">
                                    <div
                                        className={
                                            props.item.discount_text
                                                ? "platform__discount"
                                                : ""
                                        }
                                    >
                                        {props.item.discount_text
                                            ? props.item.discount_text
                                            : ""}
                                    </div>
                                    <div className="platform__icon">
                                        <i className="fab fa-playstation"></i>
                                        <div className="platform__name">
                                            <span>Playstation</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="platform">
                                <a className="platform__link" href="#">
                                    <div
                                        className={
                                            props.item.discount_text
                                                ? "platform__discount"
                                                : ""
                                        }
                                    >
                                        {props.item.discount_text}
                                    </div>
                                    <div className="platform__icon">
                                        <i className="fab fa-xbox"></i>
                                        <div className="platform__name">
                                            <span>XBOX</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="platform">
                                <a
                                    className="platform__link"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="platform__icon">
                                        <i className="fab fa-battle-net"></i>
                                        <div className="platform__name">
                                            <span>BATTLE.NET</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="extra">
                            <div className="change__region">
                                Change Region:
                                <button
                                    className="btn--clear"
                                    onClick={props.toPortal}
                                >
                                    Change
                                </button>
                            </div>
                            <div className="change__game">
                                {props.item.name
                                    ? `Title: ${props.item.name}`
                                    : "Other Titles"}
                                <button
                                    className="btn--clear"
                                    onClick={props.toPortal}
                                >
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const GameCard = (props) => {
    return (
        <div
            id={props.item.id}
            className="card"
            onClick={props.item.hasOwnProperty("url") ? "" : props.handleClick}
            href={props.item.hasOwnProperty("url") ? props.item.url : ``}
        >
            <div className="card__content">
                <div
                    className="card__promo"
                    style={{
                        display: props.item.discount_text ? "block" : "none",
                    }}
                >
                    <div className="promo_text">
                        {props.item.discount_text
                            ? props.item.discount_text
                            : ""}
                    </div>
                </div>
                <div className="card__image">
                    <div className="image_container">
                        <div
                            id={`game-card-${props.item.id}`}
                            className="game__image desktop__only"
                            style={{
                                backgroundImage: `url(${props.item.img})`,
                            }}
                        ></div>
                        <div
                            id={`game-card-${props.item.id}`}
                            className="game__image mobile__only"
                            style={{
                                backgroundImage: `url(${
                                    props.item.img_mo
                                        ? props.item.img_mo
                                        : props.item.img
                                })`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function GetGameGallery() {
    const portal = useRef();

    // EVENTS
    const toPortal = () => {
        // Get active slider
        let current = document.querySelector(".slider.active");

        // Move it to the left
        current.classList.add("hide");

        // Set to default
        setTimeout(() => {
            current.classList.remove("active");
            current.classList.remove("hide");
        }, 700);

        // Show the New Slider
        portal.current.classList.add("active");
    };

    const handleClick = (e) => {
        console.log("here");
        // Get active slider
        let current = document.querySelector(".slider.active");
        let next = document.querySelector(`#platform-${e.target.id}`);

        if (next == null) {
            console.log(`Can't find #platform-${e.target.id}`);
            return;
        }
        // Move it to the left
        current.classList.add("hide");

        // Set to default
        setTimeout(() => {
            current.classList.remove("active");
            current.classList.remove("hide");
        }, 700);

        // Show the New Slider
        next.classList.add("active");
    };

    // OnMount
    useEffect(() => {
        setInterval(portal.current.classList.add("active"), 3000);
    }, []);

    const gamesCards = info.map((item, idx) => {
        return (
            <GameCard
                key={`${item.id}-${idx}`}
                item={item}
                handleClick={handleClick}
            />
        );
    });

    // Prepare Platforms Options
    const platforms = info.map((item, idx) => {
        switch (item.platform) {
            case true:
                return (
                    <PlatformPanel
                        key={idx}
                        id={idx}
                        item={item}
                        toPortal={toPortal}
                        handleClick={handleClick}
                    />
                );
            default:
                return false;
        }
    });

    return (
        <div className="gallery">
            <div className="gallery__content">
                <div className="slider" id="portal" ref={portal}>
                    <div className="slider__inner">
                        <div className="slider__title">
                            <p>Get The Game</p>
                        </div>
                        <div className="slider__content">
                            <div className="cards__container">{gamesCards}</div>
                        </div>
                    </div>
                </div>
                {platforms}
            </div>
        </div>
    );
}

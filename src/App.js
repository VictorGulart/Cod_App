import React from "react";
import "./Styles/App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import WSOW from "./Components/WSOW/wsow";
import NewsContainer from "./Components/NewsContainer/NewsContainer";
import GetGameGallery from "./Components/GetGameGallery/GetGameGallery";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div id="app">
            <Header />
            <Banner />
            <WSOW />
            <NewsContainer />
            <GetGameGallery />
            <Footer />
        </div>
    );
}

export default App;

import React, { useEffect } from "react";
import { Tabs, Tab, TabPane, CloseButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./js/scripts";
import arrows from "./assets/img/portfolio/fullsize/arrows.png";
import one from "./assets/img/portfolio/fullsize/1.jpg";
import two from "./assets/img/portfolio/fullsize/2.jpg";
import three from "./assets/img/portfolio/fullsize/3.jpg";
import four from "./assets/img/portfolio/fullsize/4.jpg";
import five from "./assets/img/portfolio/fullsize/5.jpg";
import six from "./assets/img/portfolio/fullsize/6.jpg";
import twitterLogo from "./assets/twitter-logo.svg";
const TWITTER_HANDLE = "cardsofwonder";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

async function getTableData() {
  const url = `https://lurg73421m.execute-api.us-east-1.amazonaws.com/prod/rarity`;
  var response = await fetch(url, {
    method: "patch",
    body: JSON.stringify({ rarity: "common" }),
    headers: { "Content-Type": "application/json" },
  }).then(function (response) {
    return response.json();
  });

  var theCards = response;
  console.log("DATA....", theCards);
  var table = document.getElementById("marketPricing");
  theCards.forEach((element, index) => {
    var row = table.insertRow(index);
    row.insertCell(0).innerHTML = element["Card Name"];

    row.insertCell(1).innerHTML = element.id;
    row.insertCell(2).innerHTML = element.price;
    if (element.event) {
      row.insertCell(3).innerHTML = element.event;
    } else {
      row.insertCell(3).innerHTML = "";
    }
    if (element.price > element.earlyPrice) {
      row.className = "table-success";
    } else if (element.price < element.earlyPrice) {
      row.className = "table-danger";
    }
  });
  var response2 = await fetch(url, {
    method: "patch",
    body: JSON.stringify({ rarity: "uncommon" }),
    headers: { "Content-Type": "application/json" },
  }).then(function (response) {
    return response.json();
  });

  var theCards2 = response2;
  var table2 = document.getElementById("marketPricingTwo");
  theCards2.forEach((element, index) => {
    var row2 = table2.insertRow(index);
    row2.insertCell(0).innerHTML = element["Card Name"];
    if (element.price > element.earlyPrice) {
      row2.className = "table-success";
    } else if (element.price < element.earlyPrice) {
      row2.className = "table-danger";
    }
    row2.insertCell(1).innerHTML = element.id;
    row2.insertCell(2).innerHTML = element.price;
    if (element.event) {
      row2.insertCell(3).innerHTML = element.event;
    } else {
      row2.insertCell(3).innerHTML = "";
    }
  });

  var response3 = await fetch(url, {
    method: "patch",
    body: JSON.stringify({ rarity: "rare" }),
    headers: { "Content-Type": "application/json" },
  }).then(function (response) {
    return response.json();
  });

  var theCards3 = response3;
  var table3 = document.getElementById("marketPricingThree");
  theCards3.forEach((element, index) => {
    var row3 = table3.insertRow(index);
    row3.insertCell(0).innerHTML = element["Card Name"];
    if (element.price > element.earlyPrice) {
      row3.className = "table-success";
    } else if (element.price < element.earlyPrice) {
      row3.className = "table-danger";
    }
    row3.insertCell(1).innerHTML = element.id;
    row3.insertCell(2).innerHTML = element.price;
    if (element.event) {
      row3.insertCell(3).innerHTML = element.event;
    } else {
      row3.insertCell(3).innerHTML = "";
    }
  });
  var response4 = await fetch(url, {
    method: "patch",
    body: JSON.stringify({ rarity: "epic" }),
    headers: { "Content-Type": "application/json" },
  }).then(function (response) {
    return response.json();
  });

  var theCards4 = response4;
  var table4 = document.getElementById("marketPricingFour");
  theCards4.forEach((element, index) => {
    var row4 = table4.insertRow(index);
    row4.insertCell(0).innerHTML = element["Card Name"];
    if (element.price > element.earlyPrice) {
      row4.className = "table-success";
    } else if (element.price < element.earlyPrice) {
      row4.className = "table-danger";
    }
    row4.insertCell(1).innerHTML = element.id;
    row4.insertCell(2).innerHTML = element.price;
    if (element.event) {
      row4.insertCell(3).innerHTML = element.event;
    } else {
      row4.insertCell(3).innerHTML = "";
    }
  });
}

function App() {
  useEffect(() => {
    const onLoad = async () => {
      getTableData();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return (
    <div id="page-top">
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            Cards of Wonder
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarResponsive"
            data-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  How to Play
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Cards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 align-items-center justify-content-center text-center masthead-cow">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">Cards of Wonder</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                Cards of Wonder is the card game for Alexa. You can buy, collect
                and battle your cards against Alexa and other players.
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="page-section about-section" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Cards Cards Cards!</h2>
              <hr className="divider2" />
              <p className="text-white-75 mb-4">
                With over 150 cards and making more you can collect cards and
                when you get a set of cards you then unlock more cards. With
                screen devices you can sell your cards we even have
                accessibility tags on the cards so if you cannot see well you
                can learn what the ID of the card you are on at to sell it.
              </p>
              <a
                rel="noreferrer"
                className="btn btn-light btn-xl"
                target="_blank"
                href="https://alexa-skills.amazon.com/apis/custom/skills/amzn1.ask.skill.8c41b116-0a0c-42a0-92c2-141dafa32e51/launch"
              >
                Play Now!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">How to Play</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Collect</h3>
                <p className="text-muted mb-0">
                  Buy with wondercoins or battle Alexa to collect more cards.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Battle</h3>
                <p className="text-muted mb-0">
                  Battle your cards at random against another player or Alexa.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-person-badge fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">The Cards</h3>
                <p className="text-muted mb-0">
                  On screen devices you can look at your cards and sell them by
                  their ID.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Daily Play</h3>
                <p className="text-muted mb-0">
                  If you play daily you get a card and some wondercoins if you
                  are a subscriber you get double.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="portfolio" className="bg-primary p-3">
        &nbsp; &nbsp; &nbsp;
        <div className="container-fluid p-0">
          <h2 className="text-white text-center">The Wonders</h2>
          <hr className="divider2" />
          <div className="row g-0 p-2">
            <div className="col-md-2 text-center">
              <a className="portfolio-box" href={one} title="Rare Card">
                <img className="img-fluid" src={one} alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Summoner</div>
                  <div className="project-name">Rare Card</div>
                </div>
              </a>
            </div>
            <div className="col-md-2 text-center">
              <a className="portfolio-box" href={two} title="Common Card">
                <img className="img-fluid" src={two} alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Footpad</div>
                  <div className="project-name">Common Card</div>
                </div>
              </a>
            </div>
            <div className="col-md-2 text-center">
              <a className="portfolio-box" href={three} title="Uncommon Card">
                <img className="img-fluid" src={three} alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Mage Spy</div>
                  <div className="project-name">Uncommon Card</div>
                </div>
              </a>
            </div>
            <div className="col-md-2 text-center">
              <a className="portfolio-box" href={four} title="Uncommon Card">
                <img className="img-fluid" src={four} alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    King's Elite
                  </div>
                  <div className="project-name">Uncommon Card</div>
                </div>
              </a>
            </div>
            <div className="col-md-2 text-center">
              <a className="portfolio-box" href={five} title="Common Card">
                <img className="img-fluid" src={five} alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Tracker</div>
                  <div className="project-name">Common Card</div>
                </div>
              </a>
            </div>
            <div className="col-md-2 text-center">
              <a className="portfolio-box" href={six} title="Uncommon Card">
                <img className="img-fluid" src={six} alt="..." />
                <div className="portfolio-box-caption p-3">
                  <CloseButton />
                  <div className="project-category text-white-50">Soldier</div>
                  <div className="project-name">Uncommon Card</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
      </div>
      &nbsp; &nbsp; &nbsp;
      <div>
        <div className="container-fluid p-3">
          <h2 className="text-center mt-0">Market Place</h2>
          <hr className="divider" />
          <Tab.Container defaultActiveKey="collapseOne">
            <Tabs className="col-md-8 offset-md-2" transition={false}>
              <Tab eventKey="collapseOne" className="nav-link" title="Common">
                <TabPane
                  className="col-md-8 offset-md-2 tab-panel"
                  eventKey="collapseOne"
                >
                  <table className="table table-bordered table-responsive-md">
                    <thead>
                      <tr>
                        <th scope="col">Card Name</th>
                        <th scope="col">Card ID</th>
                        <th scope="col">Wondercoins</th>
                        <th scope="col">Event</th>
                      </tr>
                    </thead>
                    <tbody id="marketPricing"></tbody>
                  </table>
                </TabPane>
              </Tab>

              <Tab eventKey="collapseTwo" className="nav-link" title="Uncommon">
                <TabPane
                  eventKey="collapseTwo"
                  className="col-md-8 offset-md-2 tab-panel"
                >
                  <table className="table table-bordered table-responsive-md">
                    <thead>
                      <tr>
                        <th scope="col">Card Name</th>
                        <th scope="col">Card ID</th>
                        <th scope="col">Wondercoins</th>
                        <th scope="col">Event</th>
                      </tr>
                    </thead>
                    <tbody id="marketPricingTwo"></tbody>
                  </table>
                </TabPane>
              </Tab>

              <Tab eventKey="collapseThree" className="nav-link" title="Rare">
                <TabPane
                  eventKey="collapseThree"
                  className="col-md-8 offset-md-2 tab-panel"
                >
                  <table className="table table-bordered table-responsive-md">
                    <thead>
                      <tr>
                        <th scope="col">Card Name</th>
                        <th scope="col">Card ID</th>
                        <th scope="col">Wondercoins</th>
                        <th scope="col">Event</th>
                      </tr>
                    </thead>
                    <tbody id="marketPricingThree"></tbody>
                  </table>
                </TabPane>
              </Tab>
              <Tab eventKey="collapseFour" className="nav-link" title="Epic">
                <TabPane
                  eventKey="collapseFour"
                  className="col-md-8 offset-md-2 tab-panel"
                >
                  <table className="table table-bordered table-responsive-md">
                    <thead>
                      <tr>
                        <th scope="col">Card Name</th>
                        <th scope="col">Card ID</th>
                        <th scope="col">Wondercoins</th>
                        <th scope="col">Event</th>
                      </tr>
                    </thead>
                    <tbody id="marketPricingFour"></tbody>
                  </table>
                </TabPane>
              </Tab>
            </Tabs>
          </Tab.Container>
        </div>
      </div>
      <section className="page-section bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <img className="img-fluid pb-3" src={arrows} alt="..." />
          <div className="p-3">
            <a
              className="btn btn-primary btn-xl"
              rel="noreferrer"
              target="_blank"
              href="https://alexa-skills.amazon.com/apis/custom/skills/amzn1.ask.skill.8c41b116-0a0c-42a0-92c2-141dafa32e51/launch"
            >
              Play Now!
            </a>
          </div>
        </div>
      </section>
      <div className="text-center p-3">
        <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
        <a
          className="footer-text"
          href={TWITTER_LINK}
          target="_blank"
          rel="noreferrer"
        >{`@${TWITTER_HANDLE}`}</a>
      </div>
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h4 className="text-uppercase m-0">Email</h4>
              <hr className="my-4 mx-auto" />
              <div className="small text-black-50">
                <a href="mailto:cardsofwonder2@gmail.com">
                  Cards of Wonder Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2022 - Cards of Wonder
          </div>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </div>
  );
}

export default App;

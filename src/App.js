import React, { Component } from "react";
import "./App.css";
import CardList from "./CardList.js";
import { quotes } from "./quotes.js";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <p id="header-text">Positive Vibes</p>
          </div>
        </header>
        <section>
          <div>
            <CardList quotes={quotes} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;

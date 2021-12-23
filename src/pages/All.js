import ListItemLong from "../components/ListItems/ListItemLong.js";
import Api from "../../src/api_key/RapidApiKey.js";
import React, { Component } from "react";

class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
    };
  }
  componentDidMount() {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": Api,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data }, () => {
          console.log(this.state.Data);
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className="all-section">
        <header>
          <h1>All Games</h1>
        </header>
        <div className="container">
          <input type="checkbox" class="myinput" />
          <label htmlFor="">RPG</label>
          <input type="checkbox" class="myinput" />
          <label htmlFor="">MMO</label>
          <input type="checkbox" class="myinput" />
          <label htmlFor="">MMORPG</label>
          <input type="checkbox" class="myinput" />
          {/* <input type="checkbox" name="test"  checked="checked" id="test" className="checkBox" />
          <input type="checkbox" name="test"  checked="checked" id="test" className="checkBox" /> */}
          <span className="checkmark"></span>
          MMORPG
        </div>
        <section className="items-wrap">
          {this.state.Data.map((elt) => (
            <ListItemLong
              image={elt.thumbnail}
              alt={elt.title}
              title={elt.title}
              id={elt.id}
              platform={elt.platform}
              genre={elt.genre}
              key={elt.id}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default All;

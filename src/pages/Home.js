import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="home-section">
        <header>
          <h1>Find & track the best free-to-play games!</h1>
        </header>
        <section className="recent-added-section">
          <h2>Recently Added</h2>
          <article className="first-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </article>
        </section>
      </section>
    );
  }
}

export default Home;

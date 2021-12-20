import React, { Component } from "react";

class All extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="all-section">
        <header>
          <h1>All Games</h1>
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

export default All;

import React, { Component } from "react";

class CaseStudies extends Component {
  render() {
    return Object.values(this.props.cases).map((items) => (
      <h3>{items.title}</h3>
    ));
  }
}

export default CaseStudies;

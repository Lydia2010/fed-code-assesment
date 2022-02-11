import React, { Component } from "react";
import { MenuItems } from "./Menuitems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handlClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    // console.log("FROM categories from nav", Object.values(this.props.categories));
    // const categories = Object.values(this.props.categories)
    return (
      <nav className="NavbarItems">
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.link}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

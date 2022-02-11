import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Navbar from "./components/Navbar/Navbar";
import Cases from "./components/pages/Cases";
import axios from "axios";
import ArtsCulture from "./components/pages/ArtsCulture";
import NonProfits from "./components/pages/NonProfits";
import PublishingEducation from "./components/pages/PublishingEducation";
import Sport from "./components/pages/ArtsCulture";
import Wellness from "./components/pages/Wellness";

class App extends Component {
  state = {
    cases: [],
  };

  componentDidMount() {
    const axiosInstance = axios.create({
      baseURL: "https://plankdesign.com/wp-json/plank/v1/fed-test",
    });

    axiosInstance.get("/case-studies").then((res) => {
      const arrCases = Object.values(res.data);
      const casesStud = arrCases.reduce((newArrCases, item) => {
        newArrCases = [];
        newArrCases.push(item);
        return newArrCases;
      });
      this.setState({
        cases: casesStud,
      });
    });

    axiosInstance.get("/categories").then((res) => {
      const arrCategories = Object.values(res.data);
      const categories = arrCategories.reduce((newArrCategories, item) => {
        newArrCategories = [];
        newArrCategories.push(item);
        return newArrCategories;
      });
      this.setState({
        categories: categories,
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Navbar categories={this.state.categories} />
          <Routes>
            <Route path="/" element={<Cases cases={this.state.cases} />} />
            <Route path="/artsCulture" element={<ArtsCulture />} />
            <Route path="/nonProfits" element={<NonProfits />} />
            <Route
              path="/publishingEducation"
              element={<PublishingEducation />}
            />
            <Route path="/sport" element={<Sport />} />
            <Route path="/wellness" element={<Wellness />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;

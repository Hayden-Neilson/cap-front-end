import React, { Component } from "react";
import axios from "axios";
import ScrapedInfo from "./scrapedinfo";

export default class home extends Component {
  constructor() {
    super();

    this.state = {
      scraperItems: [],
    };

    this.handleGetJobs = this.handleGetJobs.bind(this);
    this.scrapeNewData = this.scrapeNewData.bind(this);
  }

  scrapeNewData() {
    axios
      .get("https://hjnapicap.herokuapp.com/scrape")
      .then((res) => {
        // this.handleGetJobs();
        this.setState({ scraperItems: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleGetJobs() {
    axios
      .get("https://hjnapicap.herokuapp.com/all_job")
      .then((response) => {
        console.log(response);
        this.setState({
          scraperItems: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillMount() {
    this.handleGetJobs();
  }

  render() {
    const scrapedRecords = this.state.scraperItems.map((res, idx) => {
      return <ScrapedInfo key={res.id || idx} scraperItems={res} />;
    });
    return (
      <div>
        <h1>Your Details Ya'll</h1>
        <div className="scrapedcont">{scrapedRecords}</div>
        <button onClick={this.scrapeNewData}>Scrape</button>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import ScrapedInfo from "./scrapedinfo";

export default class home extends Component {
  constructor() {
    super();

    this.state = {
      scraperItems: [],
    };

    this.HandleGetJobs = this.HandleGetJobs.bind(this);
  }

  HandleGetJobs() {
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
    this.HandleGetJobs();
  }

  render() {
    const scrapedRecords = this.state.scraperItems.map((res) => {
      return <ScrapedInfo key={res.id} scraperItems={res} />;
    });
    return (
      <div>
        <h1>Your Details Ya'll</h1>
        <div className="scrapedcont">{scrapedRecords}</div>
      </div>
    );
  }
}

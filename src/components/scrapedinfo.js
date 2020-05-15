import React, { Component } from "react";

const ScrapedInfo = (props) => {
  const { company, id, job, salary } = props.scraperItems;

  return (
    <div>
      {id}
      {company}
      {job}
      {salary}
    </div>
  );
};

export default ScrapedInfo;

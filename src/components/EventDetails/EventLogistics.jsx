import React from "react";
import LogisticsItem from "./LogisticsItem";

const EventLogistics = (props) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address?.replace(", ", "\n");

  return (
    <section>
      <div>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul>
        <LogisticsItem>
          <div>{humanReadableDate}</div>
        </LogisticsItem>
        <LogisticsItem>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
